class SentenceDto {
  ukrainian: string;
  english: string;
}

export class LessonDto {
  description: string;
  example: string[];
  sentence: SentenceDto;
}
