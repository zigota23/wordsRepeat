import { inctance } from "../..";
import { IVocabulary } from "../../../common/types/backend/vocabulary";



export const getAll = ()=>inctance.get<IVocabulary[]>("vocabulary")