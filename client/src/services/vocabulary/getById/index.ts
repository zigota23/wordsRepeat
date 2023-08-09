import { inctance } from "../..";
import { IVocabularyIncludeAll } from "../../../common/types/backend/vocabulary";

export const getById = (id: string) => {
  try {
    return inctance.get<IVocabularyIncludeAll>(`vocabulary/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
