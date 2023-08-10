import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthLoginDTO } from './dto/login.dto';
import { UserCreateDTO } from 'src/user/dto/create.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: AuthLoginDTO) {
    const user = await this.validateUserLogin(data);
    const token = await this.generateToken(user);

    return {
      token,
    };
  }

  async registration(data: UserCreateDTO) {
    await this.validateUserRegistration(data);

    const hashPassword = await bcrypt.hash(data.password, 5);

    const userId = await this.userService.create({
      ...data,
      password: hashPassword,
    });
    const user = await this.userService.getById(userId);

    const token = await this.generateToken(user);

    return { user, token };
  }

  private async generateToken(user: User) {
    const token = this.jwtService.sign({
      id: user.id,
      userName: user.userName,
    });

    return token;
  }

  private async validateUserLogin(data: AuthLoginDTO) {
    const user = await this.userService.getUserByEmailOrUserName(data.userName);
    const isEqualsPass = await bcrypt.compare(data.password, user.password);

    if (!user || !isEqualsPass) {
      throw new UnauthorizedException(
        "Username(email) or password aren't correct",
      );
    }

    return user;
  }

  private async validateUserRegistration(data: UserCreateDTO) {
    const userEmailExist = await this.userService.getUserByEmailOrUserName(
      data.email,
    );
    const userUserNameExist = await this.userService.getUserByEmailOrUserName(
      data.userName,
    );

    const isError = userEmailExist || userUserNameExist;

    if (isError) {
      const errorMessage = `User with this ${
        userEmailExist ? 'email' : 'userName'
      } exist`;

      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST);
    }
  }
}
