import { Typography } from "@mui/joy";
import * as Styled from "./style";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WrapperLessonBlock from "../wrapperBlock";

const LessonSentenceBlock = () => {
  return (
    <WrapperLessonBlock img={<EngineeringIcon />}>
      <Typography>sentence</Typography>
    </WrapperLessonBlock>
  );
};

export default LessonSentenceBlock;
