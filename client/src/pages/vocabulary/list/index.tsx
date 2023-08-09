import { isAxiosError } from "axios";
import { FC, useId, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { VocabularyAPI } from "../../../services/vocabulary";
import VIBItem from "./item";
import { filteringWords } from "../search/data";
import * as Styled from "./style";

interface IProps {
  search: string;
}

const VocabularyList: FC<IProps> = ({ search }) => {
  const idComponent = useId();
  const { data, isLoading, error } = useQuery({
    queryFn: () =>
      VocabularyAPI.getById("3b6c6179-3b9b-4c82-9a44-d6406b65a922"),
    queryKey: "get vocabulary by id",
  });

  const wordsFiltred = useMemo(
    () => filteringWords(search, data?.data.words),
    [search, data]
  );

  if (isAxiosError(error)) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Styled.WrapperItems>
        {wordsFiltred.map((item, index) => {
          if (!item) return <Styled.EmptyBlock />;
          return <VIBItem key={idComponent + "." + index} {...item} />;
        })}
      </Styled.WrapperItems>
    </div>
  );
};

export default VocabularyList;
