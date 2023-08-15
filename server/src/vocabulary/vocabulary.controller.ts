import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserAuth } from 'src/auth/decorators/getUserId';
import { TokenAuthDTO } from 'src/auth/dto/token.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';
import { VocabularyCreateDTO } from './dto/create.dto';
import { VocabularyUpdateDTO } from './dto/update.dto';
import { Vocabulary } from './vocabulary.model';
import { VocabularyService } from './vocabulary.service';

@ApiTags('Vocabulary')
@Controller('vocabulary')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: HttpStatus.OK, type: [Vocabulary] })
  @Get('')
  async getAll(@GetUserAuth() userAuth: TokenAuthDTO) {
    console.log(userAuth);
    const vocabularies = await this.vocabularyService.getAll();
    return vocabularies;
  }

  @ApiParam({ name: 'id', example: 'uuid', type: String })
  @ApiResponse({ status: HttpStatus.OK, type: Vocabulary })
  @Get(':id')
  async getById(@Param('id') id: string) {
    const vocabulary = await this.vocabularyService.getById(id);
    return vocabulary;
  }

  @ApiResponse({ status: HttpStatus.CREATED, type: Vocabulary })
  @Post('')
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
