import { IData, TMode } from "@modals/vocabulary/create/types";

export interface IPayload {
  mode: TMode;
  data: IData;
  id?: string;
}
