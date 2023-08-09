import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ChatCompletionResponseMessage,
  Configuration,
  OpenAIApi,
} from 'openai';
import { LessonDto } from './dto/lesson.dto';

@Injectable()
export class OpenaiService {
  private readonly openai: OpenAIApi;

  constructor() {
    const config = new Configuration({
      apiKey: process.env.OPENAI_KEY,
      organization: process.env.OPENAI_ORGANIZATION_ID,
    });

    this.openai = new OpenAIApi(config);
  }

  async chat(content: string, history: ChatCompletionResponseMessage[] = []) {
    try {
      const responseAI = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [...history, { role: 'user', content }],
      });
      return responseAI.data;
    } catch (error) {
      throw new HttpException(
        'Error with OpenAI',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  async lesson(
    word: string,
    languageTo = 'ukrainian',
    languageFrom = 'english',
    topic = 'random',
  ) {
    const content = this.getLessonStructureContent(
      word,
      languageTo,
      languageFrom,
      topic,
    );

    const resAI = await this.chat(content);
    const resultJSON = resAI.choices[0].message.content;
    const result: LessonDto = JSON.parse(resultJSON);

    return result;
  }

  private getLessonStructureContent(
    word: string,
    languageTo: string,
    languageFrom: string,
    topic: string,
  ) {
    return `
      Word:${word}
      
      Can give me back JSON object with these fields : description , example , sentence.
      
      response = {
        description ,
        example , 
        sentence
      }

      description - short description "${word}" in ${languageFrom}
      example -  string's array , short example with "${word}" in ${languageFrom} , max 3 examples
      sentence - object with two fields : ${languageTo} , ${languageFrom}

      sentence = {
        ${languageTo} , 
        ${languageFrom}
      }

      ${languageFrom} - short sentence with "${word}" in ${languageFrom} and  topic is ${topic} , but don't repeat example from response.example.
      ${languageTo} - translete sentence.${languageFrom} to ${languageTo}.
`;
  }
}
