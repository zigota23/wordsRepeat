import { ColorPaletteProp } from "@mui/joy";
import { FC, ReactNode } from "react";
import WrapperBlock from "../../../wrappers/block";
import * as Styled from "./style";

interface IProps {
  color: ColorPaletteProp;
  text: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const LessonListItem: FC<IProps> = ({ color, text, isActive, onClick }) => {
  return (
    <Styled.Wrapper color={color} isActive={isActive} onClick={onClick}>
      <WrapperBlock withoutPadding>
        <Styled.Top color={color} />
        <Styled.WrapperContent>{text}</Styled.WrapperContent>
      </WrapperBlock>
    </Styled.Wrapper>
  );
};

export default LessonListItem;
