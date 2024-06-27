import { useRecoilState } from "recoil";
import { languageState } from "../../store/language.store";
import { useQuery } from "@tanstack/react-query";
import { apiFindItemPost } from "../../service";
import { handleGetLocalStorage } from "../../helper/Xfunction";
import { LANGUAGE } from "../../utils/constant";

const useFindItemPost = (postId: number | string) => {
  const [language, _] = useRecoilState(languageState);
  const { data, isLoading } = useQuery({
    queryKey: ["post_item", postId, language],
    queryFn: () => apiFindItemPost(postId, language!),
    enabled: !!language || !!handleGetLocalStorage(LANGUAGE.KEY),
  });
  return {
    post_item: data?.data[0],
    isLoading,
  };
};

export default useFindItemPost;
