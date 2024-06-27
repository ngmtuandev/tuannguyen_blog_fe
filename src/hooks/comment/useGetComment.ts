import { useQuery } from "@tanstack/react-query";
import { TGetComment } from "../../types";
import { apiGetComments } from "../../service/comment/get-comment.api";

export const useGetComments = (getCommentInfo: TGetComment) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["comments", getCommentInfo.parentId, getCommentInfo.postId],
    queryFn: () => apiGetComments(getCommentInfo),
  });
  return {
    comments: data?.data,
    isLoading,
    refetch,
  };
};
