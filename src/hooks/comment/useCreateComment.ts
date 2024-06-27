import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateComment } from "../../service";
import { TCreateComment } from "../../types";
export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (commentInfo: TCreateComment) => apiCreateComment(commentInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};
