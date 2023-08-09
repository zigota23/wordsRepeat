import { Typography } from "@mui/joy";
import { FC, ReactNode } from "react";
import * as Styled from "./style";

export interface IWrapperTitleErrorProps {
  title?: ReactNode;
  width?: string;
  error?: string;
}

interface IProps extends IWrapperTitleErrorProps {
  children: ReactNode;
}

const WrapperTitleError: FC<IProps> = ({
  title,
  children,
  error,
  width = "100%",
}) => {
  return (
    <Styled.Wrapper width={width}>
      {title && (
        <Typography level="body1" fontSize={16} mb={1}>
          {title}
        </Typography>
      )}
      <div>{children}</div>
      {error && (
        <Typography color="danger" fontSize={14} mt={1}>
          {error}
        </Typography>
      )}
    </Styled.Wrapper>
  );
};

export default WrapperTitleError;
