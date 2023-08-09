import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateWordDTO } from './dto/createWord.dto';
import { GetWordsDTO } from './dto/getWords.dto';
import { Word } from './words.model';
import { WordsService } from './words.service';

@ApiTags('Words')
@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @ApiOperation({ summary: 'get word by id' })
  @ApiParam({ name: 'id', type: String, example: 'uuid' })
  @ApiResponse({ status: HttpStatus.OK, type: Word })
  @Get(':id')
  async getById(@Param('id') id: string) {
    const word = await this.wordsService.getById(id);
    return word;
  }

  @ApiOperation({ summary: 'get words' })
  @ApiResponse({ status: HttpStatus.OK, type: [Word] })
  @Get('')
  async getAll(@Query() query: GetWordsDTO) {
    const wordsList = await this.wordsService.getAll(query);
    return wordsList;
  }

  @ApiOperation({ summary: 'create word' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Word })
  @Post('')
  async create(@Body() body: CreateWordDTO) {
    const word = await this.wordsService.create(body);
    return word;
  }
}
