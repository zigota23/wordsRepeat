import { Typography } from "@mui/joy";
import * as Styled from "./style";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WrapperLessonBlock from "../wrapperBlock";

const LessonExampleBlock = () => {
  return (
    <WrapperLessonBlock img={<EngineeringIcon />}>
      <Typography>example</Typography>
    </WrapperLessonBlock>
  );
};

export default LessonExampleBlock;
