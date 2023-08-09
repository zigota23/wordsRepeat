import {FC} from 'react'
import VocabularyFirstBlock from './firstBlock';
import VocabularySecondBlock from './secondBlock';
import * as Styled from './style'

const VocabularyHeader:FC = ()=>{
  return (
    <Styled.Wrapper>
      <VocabularyFirstBlock />
      <VocabularySecondBlock />
    </Styled.Wrapper>
  );
}

export default VocabularyHeader