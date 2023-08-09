import { FC } from "react";
import { ReactComponent as IconAdd } from "@assets/img/square-rounded-plus.svg";
import * as Styled from './style'
import { baseColor } from "@src/wrappers/joyTheme/data";

const VCModalHeader: FC = () => {
  return (
    <Styled.Wrapper>
      <IconAdd width={40} height={40} color={baseColor[500]}/>
    </Styled.Wrapper>
  );
};

export default VCModalHeader;
