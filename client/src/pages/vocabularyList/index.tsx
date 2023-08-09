import { FC } from "react";
import WrapperHeaderNav from "../../wrappers/headerNav";
import VLHeader from "./header";
import VLList from "./list";

const VocabularyListPage: FC = () => {
  return (
    <WrapperHeaderNav>
      <VLHeader />
      <VLList />
    </WrapperHeaderNav>
  );
};

export default VocabularyListPage;
