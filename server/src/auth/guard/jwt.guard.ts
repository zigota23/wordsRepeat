import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenAuthDTO } from '../dto/token.dto';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const auth = req.header('authorization');

    if (!auth) {
      throw new UnauthorizedException('made request without token');
    }

    const [tokenType, token] = req.header('Authorization').split(' ');

    if (tokenType !== 'Bearer' || !token) {
      throw new UnauthorizedException('invalid token');
    }

    try {
      const user = this.jwtService.verify<TokenAuthDTO>(token);
      req.user = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
