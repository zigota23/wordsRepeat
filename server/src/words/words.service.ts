import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Word } from './words.model';
import { CreateWordDTO } from './dto/createWord.dto';
import { GetWordsDTO } from './dto/getWords.dto';

@Injectable()
export class WordsService {
  constructor(
    @InjectModel(Word) private readonly wordRepository: typeof Word,
  ) {}

  async getById(id: string) {
    const word = await this.wordRepository.findOne({
      where: { id },
    });

    if (!word) {
      throw new HttpException('Can not found word', HttpStatus.NOT_FOUND);
    }

    return word;
  }

  async getAll(data: GetWordsDTO) {
    const wordsList = await this.wordRepository.findAll({
      where: {
        ...data,
      },
    });

    return wordsList;
  }

  async create(data: CreateWordDTO) {
    const word = await this.wordRepository.create(data);
    if (!word) {
      throw new HttpException("Word didn't create", HttpStatus.BAD_REQUEST);
    }

    return word;
  }
}
