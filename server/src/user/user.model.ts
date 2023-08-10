import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Default,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Settings } from 'src/settings/settings.model';
import { v4 as uuidv4 } from 'uuid';

interface IUserAttr {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, IUserAttr> {
  @Unique
  @Default(uuidv4)
  @PrimaryKey
  @Column(DataType.UUID)
  @ApiProperty({ example: 'uuid' })
  id: string;

  @Unique
  @Column(DataType.STRING)
  @ApiProperty({ example: 'zigota' })
  userName: string;

  @Column(DataType.STRING)
  @ApiProperty({ example: 'Maxim' })
  firstName: string;

  @Column(DataType.STRING)
  @ApiProperty({ example: 'Volkov' })
  lastName: string;

  @Unique
  @Column(DataType.STRING)
  @ApiProperty({ example: 'zeemaxb@gmail.com' })
  email: string;

  @Column(DataType.STRING)
  @ApiProperty({ example: 'password' })
  password: string;

  @HasOne(() => Settings)
  @ApiProperty({ type: () => Settings })
  settings: Settings;
}
