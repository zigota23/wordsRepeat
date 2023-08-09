import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OpenaiService } from './openai.service';

@ApiTags('OpenAI')
@Controller('openai')
export class OpenaiController {
  constructor(private readonly service: OpenaiService) {}

  @Get('')
  async chat(@Query('content') content: string) {
    const resAI = await this.service.chat(content);

    return resAI.choices[0].message;
  }

  @Get('lesson')
  async lesson(
    @Query('word') word: string,
    @Query('languageTo') languageTo?: string,
    @Query('languageFrom') languageFrom?: string,
    @Query('topic') topic?: string,
  ) {
    const result = await this.service.lesson(
      word,
      languageTo,
      languageFrom,
      topic,
    );
    return result;
  }
}
