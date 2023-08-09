import { ApiProperty } from '@nestjs/swagger';
import { IsLowercase, IsOptional, IsString } from 'class-validator';

export class VocabularyUpdateDTO {
  @IsOptional()
  @IsLowercase()
  @IsString()
  @ApiProperty({ example: 'name' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'description' })
  description: string;
}
