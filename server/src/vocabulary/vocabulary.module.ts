import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VocabularyController } from './vocabulary.controller';
import { Vocabulary } from './vocabulary.model';
import { VocabularyService } from './vocabulary.service';

@Module({
  controllers: [VocabularyController],
  providers: [VocabularyService],
  imports: [SequelizeModule.forFeature([Vocabulary])],
})
export class VocabularyModule {}
