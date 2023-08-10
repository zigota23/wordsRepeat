import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { v4 as uuidv4 } from 'uuid';

interface ISettingsAttrs {
  userId: string;
}

@Table({ tableName: 'settings' })
export class Settings extends Model<Settings, ISettingsAttrs> {
  @Unique
  @PrimaryKey
  @Default(uuidv4)
  @Column(DataType.UUID)
  @ApiProperty({ example: 'uuid' })
  id: string;

  @AllowNull
  @Default(null)
  @Column(DataType.STRING)
  @ApiProperty({ example: 'uuid' })
  vocabularyId: string;

  @ForeignKey(() => User)
  userId: string;
}
