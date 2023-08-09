export type TMode = "create" | "update";

export interface IData {
  name: string;
  description: string;
}

export interface IDataCommon {
  mode: TMode;
  id?: string;
}
