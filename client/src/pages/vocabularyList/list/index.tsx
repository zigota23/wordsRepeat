import { FC, useId } from "react";
import { useQuery } from "react-query";
import { VocabularyAPI } from "../../../services/vocabulary";
import VLLItem from "./item";

const VLList: FC = () => {
  const idComponent = useId();
  const { data, isLoading } = useQuery({
    queryFn: VocabularyAPI.getAll,
    queryKey: "get all vocabulary",
  });

  if (!data?.data) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.data.map((vocabulary, index) => (
        <VLLItem key={idComponent + "." + index} vocabulary={vocabulary} />
      ))}
    </div>
  );
};

export default VLList;
