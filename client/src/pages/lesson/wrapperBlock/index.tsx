import { Typography } from "@mui/joy";
import * as Styled from "./style";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  img: ReactNode;
}

const WrapperLessonBlock: FC<IProps> = ({ children, img }) => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperChildren>{children}</Styled.WrapperChildren>
      <Styled.WrapperImg>{img}</Styled.WrapperImg>
    </Styled.Wrapper>
  );
};

export default WrapperLessonBlock;
