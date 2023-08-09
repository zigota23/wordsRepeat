import { createContext, useState } from "react";
import { ValueError, getInitContext } from "./data";
import { TContext, TOnChange, TResUseVEState, TValueError, TVEError } from "./types";

export const createVEContext = <T extends object, DC extends object>(
  data: T,
  dataCommon: DC = {} as DC
) => createContext(getInitContext(data, dataCommon));

export const useVEState = <T extends any>(value: T): TResUseVEState<T> => {
  const [item, setItem] = useState<TValueError<T>>({ value, error: "" });

  const onChange = (value: T) => {
    setItem({ value, error: "" });
  };

  const onError = (error: string) => {
    setItem((prev) => ({ ...prev, error }));
  };

  return {
    item,
    setItem,
    onChange,
    onError,
  };
};

export const useValueError = <T extends object, DC extends object>(
  data: T,
  dataCommonProps: DC = {} as DC
): TContext<T, DC> => {
  const [info, setInfo] = useState(new ValueError<T>(data));
  const [dataCommon, setDataCommon] = useState<DC>(dataCommonProps);

  const onChange: TOnChange<T> = (key, value) => {
    setInfo((prev) => prev.onChange(key, value));
  };

  const onError = (key: keyof T, error: string) => {
    setInfo((prev) => prev.onError(key, error));
  };

  const setData = (data: Partial<T>) => {
    setInfo((prev) => prev.setData(data));
  };

  const setErrors = (errors: Partial<TVEError<T>>) => {
    setInfo((prev) => prev.setErrors(errors));
  };

  const onChangeDC: TOnChange<DC> = (key, value) => {
    setDataCommon((prev) => ({ ...prev, [key]: value }));
  };

  return {
    data: info.data,
    getValues: () => info.getValues(),
    getErrors: () => info.getErrors(),
    onChange,
    onError,
    setData,
    setErrors,
    dataCommon,
    setDataCommon,
    onChangeDC,
  };
};
