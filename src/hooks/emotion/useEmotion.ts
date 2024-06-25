import { useQuery } from "@tanstack/react-query";
import { apiGetEmotionOfPost } from "../../service/emotion/emotion-of-post.api";

export const useGetEmotionOfPost = ({
  postId,
  emotionId,
}: {
  postId: any;
  emotionId: number;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["emotion_of_post", emotionId, postId],
    queryFn: () => apiGetEmotionOfPost(postId, emotionId || 1),
  });
  return {
    emotion: data,
    isLoading,
  };
};
