import { IWords } from "@common/data/words/types";
import { useNavigate } from "react-router-dom";
import { statusColor } from "../../common/data/statusColor/data";
import WrapperHeaderNav from "../../wrappers/headerNav";
import LessonListItem from "./item";
import * as Styled from "./style";
const statusInclude:IWords[] = [];

const LessonListPage = () => {
  const navigate = useNavigate();

  return (
    <WrapperHeaderNav>
      <Styled.Wrapper>
        {statusInclude.map((isActive, index) => (
          <LessonListItem
            color={statusColor[index]}
            text={`Lesson ${index}`}
            isActive={false}
            onClick={() => navigate("/lesson")}
          />
        ))}

        <Styled.EmptyItem />
        <Styled.EmptyItem />
        <Styled.EmptyItem />
      </Styled.Wrapper>
    </WrapperHeaderNav>
  );
};

export default LessonListPage;
