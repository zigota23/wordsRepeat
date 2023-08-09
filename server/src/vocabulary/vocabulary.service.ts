import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VocabularyCreateDTO } from './dto/create.dto';
import { VocabularyUpdateDTO } from './dto/update.dto';
import { Vocabulary } from './vocabulary.model';

@Injectable()
export class VocabularyService {
  constructor(
    @InjectModel(Vocabulary)
    private readonly vocabularyRepository: typeof Vocabulary,
  ) {}

  async getAll() {
    const vocabularies = await this.vocabularyRepository.findAll();

    const vocabulariesSorted = vocabularies.sort((a, b) => {
      const diffDate = +new Date(a.createdAt) - +new Date(b.createdAt);
      if (diffDate > 0) return 1;
      if (diffDate < 0) return -1;
      return 0;
    });
    return vocabulariesSorted;
  }

  async getById(id: string) {
    const vocabulary = await this.vocabularyRepository.findByPk(id, {
      include: { all: true },
    });

    if (!vocabulary)
      throw new HttpException('Can not found vocabulary', HttpStatus.NOT_FOUND);

    return vocabulary;
  }

  async update(id: string, data: VocabularyUpdateDTO) {
    const vocabulary = await this.vocabularyRepository.findByPk(id);
    if (!vocabulary)
      throw new HttpException('Can not found vocabulary', HttpStatus.NOT_FOUND);

    const vocabularyUpdated = await vocabulary.update(data);

    return vocabularyUpdated;
  }

  async create(data: VocabularyCreateDTO) {
    const vocabulary = await this.vocabularyRepository.create(data);

    return vocabulary;
  }

  async deleteById(id: string) {
    const vocabulary = await this.vocabularyRepository.findByPk(id, {
      include: { all: true },
    });

    if (!vocabulary)
      throw new HttpException('Can not found vocabulary', HttpStatus.NOT_FOUND);

    await Promise.all(vocabulary.words.map((word) => word.destroy()));

    await vocabulary.destroy();

    return {
      message: 'success',
    };
  }
}
