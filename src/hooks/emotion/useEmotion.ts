import { useQuery } from "@tanstack/react-query";
import { apiGetEmotionOfPost } from "../../service/emotion/emotion-of-post.api";
import { useRecoilState } from "recoil";
import { emotionCurrentState } from "../../store/emotion-of-post.store";

export const useGetEmotionOfPost = ({
  postId,
  emotionId,
}: {
  postId: any;
  emotionId: number;
}) => {
  const [id, _] = useRecoilState(emotionCurrentState);
  const { data, isLoading } = useQuery({
    queryKey: ["emotion_of_post", postId, id],
    queryFn: () => apiGetEmotionOfPost(postId, emotionId || id),
    enabled: !!id,
  });
  return {
    emotion: data,
    isLoading,
  };
};
