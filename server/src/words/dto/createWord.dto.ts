import { ApiProperty } from '@nestjs/swagger';
import { IsLowercase, IsNotEmpty, IsString } from 'class-validator';

export class CreateWordDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'red' })
  word: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'uuid' })
  vocabularyId: string;
}
