import { ICreateUpdate } from "./createUpdate";
import { IWord } from "./word";

export interface IVocabulary extends ICreateUpdate {
  id: string;
  name: string;
  description: string;
}

export interface IVocabularyIncludeAll extends IVocabulary {
  words: IWord[];
}
