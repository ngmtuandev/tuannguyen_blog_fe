import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { TFindPost } from "../../types";
import { apiFindFilterPost } from "../../service";
import { useRecoilState } from "recoil";
import { languageState } from "../../store/language.store";
import { handleGetLocalStorage } from "../../helper/Xfunction";
import { LANGUAGE } from "../../utils/constant";

const useFindFilterPost = (findInfo: TFindPost) => {
  const [language, _] = useRecoilState(languageState);
  const { data, isLoading } = useQuery({
    queryKey: ["posts", findInfo],
    queryFn: () => apiFindFilterPost(findInfo),
    enabled: !!language || !!handleGetLocalStorage(LANGUAGE.KEY),
  });
  return {
    posts: data?.data,
    isLoadingPost: isLoading,
  };
};

export const useGetPosts = (findInfo: TFindPost) => {
  return useInfiniteQuery({
    queryKey: ["posts_infinite", findInfo],
    queryFn: ({ pageParam }) => {
      return apiFindFilterPost({ ...findInfo, page: pageParam || 1 });
    },
    initialPageParam: 1,
    getNextPageParam: ({ data }) => {
      // this recived data of response api
      return data?.nextPageToken ?? undefined;
    },
  });
};

export default useFindFilterPost;
