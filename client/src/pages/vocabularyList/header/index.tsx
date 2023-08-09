import { FC, useState } from "react";
import * as Styled from "./style";
import { ReactComponent as IconBack } from "@assets/img/square-arrow-left.svg";
import { ReactComponent as IconAdd } from "@assets/img/circle-plus.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/joy";
import VocabularyCreateModal from "@modals/vocabulary/create";
import { useMutation } from "react-query";
import { VocabularyAPI } from "@src/services/vocabulary";

const VLHeader: FC = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Styled.Wrapper>
        <IconBack
          width={32}
          height={32}
          cursor="pointer"
          onClick={() => navigate("/vocabulary")}
        />
        <Button
          color="base"
          startDecorator={<IconAdd />}
          onClick={() => setIsOpenModal(true)}
        >
          Create vocabulary
        </Button>
      </Styled.Wrapper>
      {isOpenModal && (
        <VocabularyCreateModal onClose={() => setIsOpenModal(false)} />
      )}
    </>
  );
};

export default VLHeader;
