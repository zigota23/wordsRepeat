import { Dispatch, SetStateAction } from "react";

export interface IData {
  isOpenNav: boolean;
}

type TChangeData = <K extends keyof IData, D extends IData[K]>(
  key: K,
  data: D
) => void;

export interface IContext {
  data: IData;
  setData: Dispatch<SetStateAction<IData>>;
  changeData: TChangeData;
}
