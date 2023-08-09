import { VocabularyAPI } from "@src/services/vocabulary";
import { useMutation } from "react-query";
import { IPayload } from "./types";

export const useAccept = () => {
  return useMutation({
    mutationFn: async (payload: IPayload) => {
      const { mode, data, id } = payload;
      if (mode === "create") {
        const vocabulary = await VocabularyAPI.create(data);
        return vocabulary;
      }

      if (!id) {
        throw new Error("id need to be for updating");
      }

      const vocabulary = await VocabularyAPI.update(id, data);

      return vocabulary;
    },
  });
};
