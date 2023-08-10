import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Vocabulary } from 'src/vocabulary/vocabulary.model';

import { v4 as uuidv4 } from 'uuid';

interface IWordCreationAttrs {
  word: string;
  vocabularyId: string;
}

@Table({ tableName: 'words' })
export class Word extends Model<Word, IWordCreationAttrs> {
  @Unique
  @PrimaryKey
  @Default(uuidv4)
  @Column(DataType.UUID)
  @ApiProperty({ example: 'uuid', description: "Unique word's id" })
  id: string;

  @Unique
  @Column(DataType.STRING)
  @ApiProperty({ example: 'red', description: 'Word' })
  word: string;

  @Default(0)
  @Column(DataType.INTEGER)
  @ApiProperty({ example: 1, description: 'Status of progess , max is 5' })
  status: number;

  @ForeignKey(() => Vocabulary)
  @ApiProperty({ example: 'uuid', description: 'Vocabulary id' })
  vocabularyId: string;
}
