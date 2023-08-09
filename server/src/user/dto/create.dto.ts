import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCreateDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'zigota' })
  userName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Maxiv' })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Volkov' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'zeemaxb@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'password' })
  password: string;
}
