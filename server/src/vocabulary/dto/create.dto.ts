import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class VocabularyCreateDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'main' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'My first vocabulary' })
  description: string;
}
