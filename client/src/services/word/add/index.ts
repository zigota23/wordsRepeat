import { inctance } from "../..";
import { IWord } from "../../../common/types/backend/word";
import { IPayload } from "./types";

export const add = (payload: IPayload) =>
  inctance.post<IWord>("words", payload);
