import { Typography } from "@mui/joy";
import WrapperHeaderNav from "../../wrappers/headerNav";
import LessonDescriptionBlock from "./descriptionBlock";
import LessonExampleBlock from "./exampleBlock";
import LessonSentenceBlock from "./sentenceBlock";

const LessonPage = () => {
  return (
    <WrapperHeaderNav>
      <Typography level="h1" fontWeight={900} mb={3}>
        Ready
      </Typography>
      <LessonDescriptionBlock />
      <LessonExampleBlock />
      <LessonSentenceBlock />
    </WrapperHeaderNav>
  );
};

export default LessonPage;
