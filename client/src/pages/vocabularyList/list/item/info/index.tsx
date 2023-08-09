import { Typography } from "@mui/joy";
import { FC } from "react";
import * as Styled from "./style";

interface IProps {
  name: string;
  description: string;
}

const VLLIInfo: FC<IProps> = ({name,description}) => {
  return (
    <div>
      <Styled.WrapperText>
        <Typography level="body1">Name:</Typography>
        <Typography level="body3">{name}</Typography>
      </Styled.WrapperText>
      <Styled.WrapperText>
        <Typography level="body2">Description:</Typography>
        <Typography level="body3">{description}</Typography>
      </Styled.WrapperText>
    </div>
  );
};

export default VLLIInfo;
