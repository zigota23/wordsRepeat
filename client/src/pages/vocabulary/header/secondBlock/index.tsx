import { Button, Input, Typography } from "@mui/joy";
import WrapperBlock from "../../../../wrappers/block";
import * as Styled from "./style";
import AddIcon from "@mui/icons-material/Add";
import { useMutation } from "react-query";
import { WordAPI } from "../../../../services/word";
import InputComponent from "@components/input";
import { useVEState } from "@common/valueError";

const VocabularySecondBlock = () => {
  const { item: word, onChange, onError } = useVEState("");
  const { mutate, isLoading } = useMutation({
    mutationFn: WordAPI.add,
    onSuccess: () => onChange(""),
  });

  const onClickAdd = () => {
    if (!word.value) {
      onError("Field must be filled");
      return;
    }
    mutate({
      word: word.value,
      vocabularyId: "3b6c6179-3b9b-4c82-9a44-d6406b65a922",
    });
  };

  return (
    <WrapperBlock width="fit-content">
      <Styled.Wrapper>
        <Typography level="h4" fontWeight={900}>
          Add New Word
        </Typography>
        <Styled.InputWrapper>
          <InputComponent
            {...word}
            color="base"
            onChange={(value) => onChange(value.toLocaleLowerCase())}
          />
        </Styled.InputWrapper>
        <Styled.ButtonWrapper>
          <Button
            color="base"
            onClick={onClickAdd}
            startDecorator={<AddIcon />}
            loading={isLoading}
            disabled={!!word.error || isLoading}
          >
            Add
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Wrapper>
    </WrapperBlock>
  );
};

export default VocabularySecondBlock;
