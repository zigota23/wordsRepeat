import { ColorPaletteProp, Typography } from "@mui/joy";
import { FC, ReactNode } from "react";
import DotComponent from "../../../../components/dot";
import * as Styled from "./style";

interface IProps {
  title: ReactNode;
  text: ReactNode;
  color?: ColorPaletteProp;
  widthTitle?: string;
}

const VTitleText: FC<IProps> = ({
  title,
  text,
  color,
  widthTitle = "125px",
}) => {
  return (
    <Styled.WrapperLine>
      {color && <DotComponent color={color} />}
      <Typography
        level="body1"
        fontSize={18}
        fontWeight={900}
        width={widthTitle}
      >
        {title}
      </Typography>
      <Typography level="body1" fontSize={18} fontWeight={700}>
        {text}
      </Typography>
    </Styled.WrapperLine>
  );
};

export default VTitleText;
