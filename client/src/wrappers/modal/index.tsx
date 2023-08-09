import { Modal, ModalClose, ModalDialog } from "@mui/joy";
import { FC, ReactNode } from "react";

type TSize = "s" | "m" | "l";

const dataSize: Record<TSize, number> = {
  s: 480,
  m: 540,
  l: 768,
};

interface IProps {
  onClose: () => void;
  children: ReactNode;
  size?: TSize;
}

const WrapperModal: FC<IProps> = ({ onClose, children, size = "m" }) => {
  return (
    <Modal open onClose={onClose}>
      <ModalDialog sx={{ width: dataSize[size] }}>
        <ModalClose />
        {children}
      </ModalDialog>
    </Modal>
  );
};

export default WrapperModal;
