import { IWord } from "../../../common/types/backend/word";

export const filteringWords = (search: string, words?: IWord[]) => {
  if (!words) return [];
  const filtred = words.filter(({ word }) =>
    word.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const needLength = filtred.length + (5 - (filtred.length % 5));
  const response = new Array(needLength).fill(0).map((_, index) => {
    if (index >= filtred.length) return;
    return filtred[index];
  });

  return response;
};
