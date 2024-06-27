import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiDeleteComment } from "../../service/comment/delete-comment.api";
export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentId: number) => apiDeleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};
