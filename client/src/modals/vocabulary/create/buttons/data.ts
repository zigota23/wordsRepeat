import { IData } from "../types";

const getErrorItem = (key: keyof IData, error = "") => [key, error];

export const validateData = (data: IData) => {
  const dataArray = Object.entries(data) as [keyof IData, string][];

  const errorArray = dataArray.map(([key, value]) => {
    if (value.length) return getErrorItem(key);
    return getErrorItem(key, "Field must be filled");
  });

  const errors = Object.fromEntries(errorArray) as Record<keyof IData, string>;
  const isValid = !errorArray.filter(([_, error]) => !!error.length).length;

  return { errors, isValid };
};
