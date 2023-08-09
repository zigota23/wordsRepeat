import WrapperBorderIcon from "@src/wrappers/borderIcon";
import WrapperModal from "@src/wrappers/modal";
import { ReactComponent as IconDelete } from "@assets/img/trash.svg";
import { FC, useContext } from "react";
import { theme } from "@wrappers/joyTheme/data";
import { Typography } from "@mui/joy";
import VDMText from "./text";
import VDMButtons from "./buttons";

interface IProps {
  onClose: () => void;
  name: string;
  id: string;
}

const VocabularyDeleteModal: FC<IProps> = ({ onClose, name, id }) => {
  return (
    <WrapperModal onClose={onClose} size="s">
      <WrapperBorderIcon>
        <IconDelete color={theme.palette.danger[500]} />
      </WrapperBorderIcon>
      <VDMText name={name} />
      <VDMButtons onClose={onClose} id={id} />
    </WrapperModal>
  );
};

export default VocabularyDeleteModal;
