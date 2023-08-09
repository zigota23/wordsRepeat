import { Button } from "@mui/joy";
import { FC } from "react";
import { useVCModalContext } from "..";
import { validateData } from "./data";
import { useAccept } from "./hooks/useAccept";
import * as Styled from "./style";

interface IProps {
  onClose: () => void;
}

const VCModalButtons: FC<IProps> = ({ onClose }) => {
  const { dataCommon, getValues, setErrors } = useVCModalContext();
  const { mode, id } = dataCommon;

  const { mutateAsync, isLoading } = useAccept();

  const onClickAccept = () => {
    const data = getValues();
    const { errors, isValid } = validateData(data);
    setErrors(errors);
    if (isValid) mutateAsync({ mode, data, id }).then(onClose);
  };

  return (
    <Styled.Wrapper>
      <Button color="danger" onClick={onClose}>
        Close
      </Button>
      <Button
        color={mode === "create" ? "success" : "base"}
        loading={isLoading}
        onClick={onClickAccept}
      >
        {mode === "create" ? "Create" : "Update"}
      </Button>
    </Styled.Wrapper>
  );
};

export default VCModalButtons;
