import { ICreateUpdate } from "./createUpdate";
import { IVocabulary } from "./vocabulary";

export interface IWord extends ICreateUpdate {
  id: string;
  word: string;
  status: number;
  vocabularyId: string;
}

export interface IWordIncludeAll extends IWord {
  vocabulary: IVocabulary;
}
