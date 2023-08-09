import { Button } from "@mui/joy";
import { FC, useState } from "react";
import { ReactComponent as IconVocabulary } from "@assets/img/vocabulary.svg";
import { ReactComponent as IconEdit } from "@assets/img/edit.svg";
import { ReactComponent as IconTrash } from "@assets/img/trash.svg";
import * as Styled from "./style";
import VocabularyCreateModal from "@modals/vocabulary/create";
import { IVocabulary } from "@common/types/backend/vocabulary";
import { useMutation } from "react-query";
import { VocabularyAPI } from "@src/services/vocabulary";
import VocabularyDeleteModal from "@modals/vocabulary/delete";

interface IProps {
  vocabulary: IVocabulary;
}

const VLLIButtons: FC<IProps> = ({ vocabulary }) => {
  const { name, description, id } = vocabulary;

  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <>
      <Styled.Wrapper>
        <Button color="success" startDecorator={<IconVocabulary />}>
          Use
        </Button>
        <Button
          color="base"
          startDecorator={<IconEdit />}
          onClick={() => setIsOpenCreate(true)}
        >
          Update
        </Button>
        <Button
          color="danger"
          startDecorator={<IconTrash />}
          onClick={() => setIsOpenDelete(true)}
        >
          Delete
        </Button>
      </Styled.Wrapper>

      {isOpenDelete && (
        <VocabularyDeleteModal
          onClose={() => setIsOpenDelete(false)}
          name={name}
          id={id}
        />
      )}

      {isOpenCreate && (
        <VocabularyCreateModal
          onClose={() => setIsOpenCreate(false)}
          mode="update"
          id={id}
          initialData={{ name, description }}
        />
      )}
    </>
  );
};

export default VLLIButtons;
