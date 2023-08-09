import { IVocabularyIncludeAll } from "@common/types/backend/vocabulary";
import { inctance } from "@src/services";
import { IPayload } from "./types";

export const create = (payload: IPayload) =>
  inctance.post<IVocabularyIncludeAll>("/vocabulary", payload);
