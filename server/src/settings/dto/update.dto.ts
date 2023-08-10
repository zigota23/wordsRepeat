import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, ValidateIf } from 'class-validator';

export class SettingsUpdateDTO {
  @IsString()
  @IsOptional()
  @ValidateIf((type, value) => value !== null)
  @ApiProperty({ example: 'uuid' })
  vocabularyId: string | null;
}
