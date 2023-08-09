import { Injectable } from '@nestjs/common';
import { AuthLoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  async login(data: AuthLoginDTO) {
    return '';
  }
}
