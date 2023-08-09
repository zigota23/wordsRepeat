import { Button } from "@mui/joy";
import { VocabularyAPI } from "@src/services/vocabulary";
import { FC } from "react";
import { useMutation } from "react-query";
import * as Styled from "./style";

interface IProps {
  onClose: () => void;
  id: string;
}

const VDMButtons: FC<IProps> = ({ onClose, id }) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: VocabularyAPI.deleteById,
    onSuccess: onClose,
  });

  return (
    <Styled.Wrapper>
      <Button color="base" onClick={onClose}>
        Close
      </Button>
      <Button color="danger" loading={isLoading} onClick={() => mutate(id)}>
        Delete
      </Button>
    </Styled.Wrapper>
  );
};

export default VDMButtons;
