import { useRecoilState } from "recoil";
import { TFindPost } from "../../types";
import { languageState } from "../../store/language.store";
import { useQuery } from "@tanstack/react-query";
import { apiFindFilterPost } from "../../service";
import { handleGetLocalStorage } from "../../helper/Xfunction";
import { LANGUAGE } from "../../utils/constant";
import { tagState } from "../../store/tag.store";

const useSearchPost = (findInfo: TFindPost) => {
  const [language, _] = useRecoilState(languageState);
  const [tag] = useRecoilState(tagState);
  const { data, isLoading } = useQuery({
    queryKey: ["post_search", findInfo],
    queryFn: () => apiFindFilterPost(findInfo),
    enabled: !!language || !!handleGetLocalStorage(LANGUAGE.KEY) || !!tag,
  });
  return {
    posts: data?.data,
    isLoadingPost: isLoading,
  };
};
export default useSearchPost;
