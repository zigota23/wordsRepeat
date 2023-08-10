import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserCreateDTO } from 'src/user/dto/create.dto';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: AuthLoginDTO) {
    const token = await this.authService.login(body);
    return token;
  }

  @Post('/registration')
  async registration(@Body() body: UserCreateDTO) {
    const res = await this.authService.registration(body);
    return res;
  }
}
