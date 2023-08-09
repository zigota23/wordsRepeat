import { ColorPaletteProp } from "@mui/joy";
import { FC } from "react";
import { statusColor } from "../../../../common/data/statusColor/data";
import { IWords } from "../../../../common/data/words/types";
import { IWord } from "../../../../common/types/backend/word";
import DotComponent from "../../../../components/dot";
import WrapperBlock from "../../../../wrappers/block";
import VTitleText from "../../wrappers/titleText";
import * as Styled from "./style";

const VIBItem: FC<IWord> = ({ status, createdAt, word }) => {
  return (
    <Styled.Wrapper color={statusColor[status]}>
      <Styled.WrapperDot>
        <DotComponent color={statusColor[status]} />
      </Styled.WrapperDot>

      <WrapperBlock>
        <Styled.Text level="h4" fontWeight={900}>
          {word}
        </Styled.Text>
        <VTitleText
          title="Date of create:"
          text={createdAt}
          widthTitle="140px"
        />
        <VTitleText title="Repeat date:" text={createdAt} widthTitle="140px" />
        <VTitleText title="Status:" text={status} widthTitle="140px" />
      </WrapperBlock>
    </Styled.Wrapper>
  );
};

export default VIBItem;
