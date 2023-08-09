import WrapperHeaderNav from "../../wrappers/headerNav";
import VocabularyList from "./list";
import VocabularyHeader from "./header";
import VocabularySearch from "./search";
import { useState } from "react";

const VocabularyPage = () => {
  const [search, setSearch] = useState("");

  return (
    <WrapperHeaderNav>
      <VocabularyHeader />
      <VocabularySearch search={search} setSearch={setSearch} />
      <VocabularyList search={search} />
    </WrapperHeaderNav>
  );
};

export default VocabularyPage;
