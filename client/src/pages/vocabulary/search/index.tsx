import { Button } from "@mui/joy";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../../components/input";
import { ReactComponent as IconChange } from "@assets/img/refresh-dot.svg";
import * as Styled from "./style";

interface IProps {
  search: string;
  setSearch?: (value: string) => void;
}

const VocabularySearch: FC<IProps> = ({ search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <Styled.WrapperSearch>
        <InputComponent
          title="Search:"
          color="base"
          value={search}
          onChange={setSearch}
        />
      </Styled.WrapperSearch>

      <div>
        <Button
          color="base"
          onClick={() => navigate("/vocabulary/list")}
          startDecorator={<IconChange />}
        >
          Change Vocabulary
        </Button>
      </div>
    </Styled.Wrapper>
  );
};

export default VocabularySearch;
