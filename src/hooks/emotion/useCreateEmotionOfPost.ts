import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCreateEmotion } from "../../service";
import { TCreateEmotionOfPost } from "../../types";
export const useCreateEmotionOfPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (emotionInfo: TCreateEmotionOfPost) =>
      apiCreateEmotion(emotionInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post_item"],
      });
    },
  });
};
