import { Input, InputProps } from "@mui/joy";
import { FC } from "react";
import WrapperTitleError, {
  IWrapperTitleErrorProps,
} from "../../wrappers/titleError";

type TProps = IWrapperTitleErrorProps &
  Omit<InputProps, keyof IWrapperTitleErrorProps | "onChange">;

interface IProps extends TProps {
  onChange?: (value: string) => void;
}

const InputComponent: FC<IProps> = ({
  title,
  error,
  width,
  onChange,
  ...propsInput
}) => {
  return (
    <WrapperTitleError title={title} error={error} width={width}>
      <Input
        onChange={({ target: { value } }) => onChange && onChange(value)}
        {...propsInput}
      />
    </WrapperTitleError>
  );
};

export default InputComponent;
