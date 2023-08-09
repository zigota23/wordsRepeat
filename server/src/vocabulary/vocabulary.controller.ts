import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VocabularyCreateDTO } from './dto/create.dto';
import { VocabularyUpdateDTO } from './dto/update.dto';
import { Vocabulary } from './vocabulary.model';
import { VocabularyService } from './vocabulary.service';

@ApiTags('Vocabulary')
@Controller('vocabulary')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Get('')
  @ApiResponse({ status: HttpStatus.OK, type: [Vocabulary] })
  async getAll() {
    const vocabularies = await this.vocabularyService.getAll();
    return vocabularies;
  }

  @Get(':id')
  @ApiParam({ name: 'id', example: 'uuid', type: String })
  @ApiResponse({ status: HttpStatus.OK, type: Vocabulary })
  async getById(@Param('id') id: string) {
    const vocabulary = await this.vocabularyService.getById(id);
    return vocabulary;
  }

  @Post('')
  @ApiResponse({ status: HttpStatus.CREATED, type: Vocabulary })
  async create(@Body() body: VocabularyCreateDTO) {
    const vocabulary = await this.vocabularyService.create(body);

    return vocabulary;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: VocabularyUpdateDTO) {
    const vocabulary = await this.vocabularyService.update(id, body);
    return vocabulary;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    const res = await this.vocabularyService.deleteById(id);
    return res;
  }
}
