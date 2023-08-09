import { useValueError, createVEContext } from "@common/valueError";
import { Modal, ModalClose, ModalDialog } from "@mui/joy";
import { useEffect } from "react";
import { useContext } from "react";
import { FC } from "react";
import VCModalButtons from "./buttons";
import { initData, initDataCommon } from "./data";
import VCModalField from "./field";
import VCModalHeader from "./header";
import { IData, TMode } from "./types";

interface IProps {
  onClose: () => void;
  initialData?: IData;
  mode?: TMode;
  id?: string;
}

const Context = createVEContext(initData, initDataCommon);
export const useVCModalContext = () => useContext(Context);

const VocabularyCreateModal: FC<IProps> = ({
  onClose,
  id,
  initialData,
  mode = "create",
}) => {
  const infoVE = useValueError(initialData || initData, initDataCommon);

  useEffect(() => {
    infoVE.onChangeDC("mode", mode);
    infoVE.onChangeDC("id", id);
  }, [mode, id]);

  return (
    <Context.Provider value={infoVE}>
      <Modal open onClose={onClose}>
        <ModalDialog sx={{ width: 540 }}>
          <ModalClose />

          <VCModalHeader />
          <VCModalField />
          <VCModalButtons onClose={onClose} />
        </ModalDialog>
      </Modal>
    </Context.Provider>
  );
};

export default VocabularyCreateModal;
