import InputComponent from "@components/input";
import { FC } from "react";
import { useVCModalContext } from "..";
import * as Styled from './style'

const VCModalField: FC = () => {
  const { data, onChange } = useVCModalContext();
  
  return (
    <Styled.Wrapper>
      <InputComponent
        {...data("name")}
        title="Name:"
        color="base"
        onChange={(value) => onChange("name", value)}
      />
      <InputComponent
        {...data("description")}
        title="Description:"
        color="base"
        onChange={(value) => onChange("description", value)}
      />
    </Styled.Wrapper>
  );
};

export default VCModalField;
