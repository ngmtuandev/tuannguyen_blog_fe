import { useQuery } from "@tanstack/react-query";
import { TGetComment } from "../../types";
import { apiGetComments } from "../../service/comment/get-comment.api";

export const useGetCommentsChildren = (getCommentInfo: TGetComment) => {

  const { data, isLoading } = useQuery({
    queryKey: ["comments_children"],
    queryFn: () => apiGetComments(getCommentInfo),
    enabled: false
  });
  return {
    comments_children: data?.data,
    isLoading,
  };
};
