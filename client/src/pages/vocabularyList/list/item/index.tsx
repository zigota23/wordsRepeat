import { FC } from "react";
import { IVocabulary } from "../../../../common/types/backend/vocabulary";
import VLLIButtons from "./buttons";
import VLLIInfo from "./info";
import * as Styled from "./style";

interface IProps {
  vocabulary: IVocabulary;
}

const VLLItem: FC<IProps> = ({ vocabulary }) => {
  const { name, description, id } = vocabulary;
  return (
    <Styled.Wrapper>
      <VLLIInfo name={name} description={description} />
      <VLLIButtons vocabulary={vocabulary}/>
    </Styled.Wrapper>
  );
};

export default VLLItem;
