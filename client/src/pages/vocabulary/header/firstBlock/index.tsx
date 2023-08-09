import { Typography, useColorScheme } from "@mui/joy";
import WrapperBlock from "../../../../wrappers/block";
import VTitleText from "../../wrappers/titleText";
import * as Styled from "./style";

const VocabularyFirstBlock = () => {
  return (
    <div>
      <WrapperBlock width="fit-content">
        <Styled.WrapperLine>
          <Typography level="h4" fontWeight={900}>
            Total Words :
          </Typography>
          <Typography level="h5" fontWeight={700}>
            340
          </Typography>
        </Styled.WrapperLine>

        <VTitleText title="Status 1 :" text="20" color="neutral" />
        <VTitleText title="Status 2 :" text="40" color="danger" />
        <VTitleText title="Status 3 :" text="50" color="info" />
        <VTitleText title="Status 4 :" text="60" color="warning" />
        <VTitleText title="Status 5 :" text="80" color="primary" />
        <VTitleText title="Status 6 :" text="90" color="success" />
      </WrapperBlock>
    </div>
  );
};

export default VocabularyFirstBlock;
