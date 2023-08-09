import { Dispatch, SetStateAction } from "react";

export type TValueError<T = any> = {
  value: T;
  error: string;
};

export type TResUseVEState<T> = {
  item: TValueError<T>;
  setItem: Dispatch<SetStateAction<TValueError<T>>>;
  onChange: (value: T) => void;
  onError: (error: string) => void;
};

export type TOnChange<T> = <K extends keyof T, V extends T[K]>(
  key: K,
  value: V
) => void;

export type TContext<T extends object, DC extends object> = {
  data: <K extends keyof T, V extends T[K]>(key: K) => TValueError<V>;
  getValues: () => T;
  getErrors: () => TVEError<T>;
  onChange: <K extends keyof T, V extends T[K]>(key: K, value: V) => void;
  onError: (key: keyof T, error: string) => void;
  setData: (data: Partial<T>) => void;
  setErrors: (errors: Partial<TVEError<T>>) => void;
  dataCommon: DC;
  setDataCommon: Dispatch<SetStateAction<DC>>;
  onChangeDC: TOnChange<DC>;
};

export type TVEData<D> = Record<keyof D, TValueError<D[keyof D]>>;
export type TVEError<D> = Record<keyof D, string>;
export type TVEDataEntries<D> = [keyof D, TValueError<D[keyof D]>][];
