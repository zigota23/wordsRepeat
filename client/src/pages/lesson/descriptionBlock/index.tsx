import { Typography } from "@mui/joy";
import * as Styled from "./style";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WrapperLessonBlock from "../wrapperBlock";

const LessonDescriptionBlock = () => {
  return (
    <WrapperLessonBlock img={<EngineeringIcon />}>
      <Typography>description</Typography>
    </WrapperLessonBlock>
  );
};

export default LessonDescriptionBlock;
