import { createContext, FC, ReactNode, useState } from "react";
import { initContext, initData } from "./data";
import { IContext } from "./types";

export const GlobalContext = createContext(initContext);

interface IProps {
  children: ReactNode;
}

const GlobalContextProvider: FC<IProps> = ({ children }) => {
  const [data, setData] = useState(initData);

  const changeData: IContext["changeData"] = (key, data) =>
    setData((prev) => ({ ...prev, [key]: data }));

  return (
    <GlobalContext.Provider value={{ data, setData, changeData }}>
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalContextProvider;
