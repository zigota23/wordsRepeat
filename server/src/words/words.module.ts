import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { WordsController } from './words.controller';
import { Word } from './words.model';
import { WordsService } from './words.service';

@Module({
  controllers: [WordsController],
  providers: [WordsService],
  imports: [SequelizeModule.forFeature([Word])],
})
export class WordsModule {}
