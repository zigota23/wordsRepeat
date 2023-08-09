import { IWords } from "../../common/data/words/types";

export const getWordsToRepeat = (dataWords: IWords[]) => {
  const dataFiltered = dataWords.filter(
    ({ repeat }) => new Date(repeat).getTime() < new Date().getTime()
  );

  const statusInclude = new Array(7)
    .fill(0)
    .map((_, index) => !!dataFiltered.find(({ status }) => status === index));

  return {
    statusInclude,
    dataFiltered,
  };
};
