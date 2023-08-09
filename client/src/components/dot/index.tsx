
import { ColorPaletteProp } from "@mui/joy";
import { FC } from "react";
import * as Styled from "./style"


interface IProps {
  color:ColorPaletteProp
}

const DotComponent: FC<IProps> = ({color}) => {
  return (
    <Styled.Wrapper color={color}>
      <Styled.Center />
    </Styled.Wrapper>
  );
};


export default DotComponent;