import { ColorPaletteProp } from "@mui/joy";
import { FC, ReactNode } from "react";
import * as Styled from "./style";

interface IProps {
  children: ReactNode;
  color?: ColorPaletteProp;
}

const WrapperBorderIcon: FC<IProps> = ({ children, color = "neutral" }) => {
  return <Styled.Wrapper color={color}>{children}</Styled.Wrapper>;
};

export default WrapperBorderIcon;
