import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Word } from 'src/words/words.model';
import { v4 as uuid4 } from 'uuid';

export interface IVocabularyAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'vocabulary' })
export class Vocabulary extends Model<Vocabulary, IVocabularyAttr> {
  @PrimaryKey
  @Default(uuid4)
  @Column(DataType.UUID)
  @ApiProperty({ example: 'uuid' })
  id: string;

  @Column(DataType.STRING)
  @ApiProperty({ example: 'main' })
  name: string;

  @Column(DataType.STRING)
  @ApiProperty({ example: 'My first vocabulary' })
  description: string;

  @HasMany(() => Word)
  // @ApiProperty({ type: [Word] })
  words: Word[];
}
