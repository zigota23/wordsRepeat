import { IContext, IData } from "./types";

export const initData: IData = {
  isOpenNav: true,
};

export const initContext: IContext = {
  data: initData,
  setData: () => {},
  changeData: () => {},
};
