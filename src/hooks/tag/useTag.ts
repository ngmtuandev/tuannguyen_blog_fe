import { useQuery } from "@tanstack/react-query";
import { apiGetTags } from "../../service";
import { useRecoilState } from "recoil";
import { modelSearchState } from "../../store/model-search.store";

export const useGetTags = () => {
  const [modelSearch, _] = useRecoilState(modelSearchState);
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: () => apiGetTags(),
    enabled: modelSearch,
  });
  return {
    dataTags: data?.data,
    isLoading,
  };
};
