import {
  TContext,
  TVEData,
  TVEDataEntries,
  TVEError,
  TValueError,
} from "./types";

export const getValueError = <T>(value: T, error = ""): TValueError<T> => ({
  value,
  error,
});

export const getInitContext = <T extends object, DC extends object>(
  dataProps: T,
  dataCommon: DC
): TContext<T, DC> => {
  const data = new ValueError(dataProps);

  return {
    data: data.data,
    getValues: () => data.getValues(),
    getErrors: () => data.getErrors(),
    onChange: (...args: Parameters<(typeof data)["onChange"]>) =>
      data.onChange(...args),
    onError: (...args: Parameters<(typeof data)["onError"]>) =>
      data.onError(...args),
    setData: (...args: Parameters<(typeof data)["setData"]>) =>
      data.setData(...args),
    setErrors: (...args: Parameters<(typeof data)["setErrors"]>) =>
      data.setErrors(...args),
    dataCommon,
    setDataCommon: () => {},
    onChangeDC: () => {},
  };
};

export class ValueError<D extends object> {
  private _data: TVEData<D>;

  constructor(dataProps: D, errors?: Partial<TVEError<D>>) {
    const dataArray = Object.entries(dataProps) as [keyof D, D[keyof D]][];
    const changedDataProps = dataArray.map(([key, value]) => [
      key,
      getValueError(value, errors?.[key]),
    ]);
    const data = Object.fromEntries(changedDataProps) as TVEData<D>;
    this._data = data;
  }

  getValues() {
    const dataArray = Object.entries(this._data) as TVEDataEntries<D>;
    const valuesArray = dataArray.map(([key, { value }]) => [key, value]);
    const response = Object.fromEntries(valuesArray) as D;

    return response;
  }

  getErrors() {
    const dataArray = Object.entries(this._data) as TVEDataEntries<D>;
    const valuesArray = dataArray.map(([key, { error }]) => [key, error]);
    const response = Object.fromEntries(valuesArray) as TVEError<D>;

    return response;
  }

  onChange<K extends keyof D, V extends D[K]>(key: K, value: V) {
    const data = this.getValues();
    const errors = this.getErrors()
    data[key] = value;
    errors[key] = ""

    return new ValueError(data, errors);
  }

  onError(key: keyof D, error: string) {
    const errors: Partial<TVEError<D>> = {};
    errors[key] = error;

    return new ValueError(this.getValues(), errors);
  }

  setData(dataProps: Partial<D>) {
    const data = { ...this.getValues(), ...dataProps };
    return new ValueError(data);
  }

  setErrors(errors: Partial<TVEError<D>>) {
    return new ValueError(this.getValues(), errors);
  }

  private getData<K extends keyof D, V extends D[K]>(key: K): TValueError<V> {
    return this._data[key] as TValueError<V>;
  }

  get data() {
    return this.getData.bind(this);
  }
}
