import { IsNotEmpty, IsString } from 'class-validator';

export class AuthLoginDTO {
  @IsNotEmpty()
  @IsString()
  userName: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
