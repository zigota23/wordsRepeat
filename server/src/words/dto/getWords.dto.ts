import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetWordsDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'main', required: false })
  vocabulary?: string;

  @IsString()
  @IsNumberString()
  @IsOptional()
  @ApiProperty({ example: '1', required: false })
  status?: string;
}
