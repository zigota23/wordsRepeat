
import { FC, ReactNode } from "react";
import * as Styled from "./style";

interface IProps {
  width?: string;
  height?: string;
  children: ReactNode;
  withoutPadding?: boolean;
}

const WrapperBlock: FC<IProps> = ({
  width = "100%",
  height = "fit-content",
  children,
  withoutPadding=false
}) => {
  return (
    <Styled.Wrapper
      width={width}
      height={height}
      withoutPadding={withoutPadding}
    >
      {children}
    </Styled.Wrapper>
  );
};

export default WrapperBlock;
