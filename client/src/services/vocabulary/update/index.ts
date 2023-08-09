import { IVocabularyIncludeAll } from "@common/types/backend/vocabulary";
import { inctance } from "@src/services";
import { IPayload } from "./types";

export const update = (id: string, payload: IPayload) =>
  inctance.patch<IVocabularyIncludeAll>(`vocabulary/${id}`, payload);
