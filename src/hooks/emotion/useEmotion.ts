import { useQuery } from "@tanstack/react-query";
import { apiGetEmotionOfPost } from "../../service/emotion/emotion-of-post.api";
import { useRecoilState } from "recoil";
import { emotionOfPostState } from "../../store/emotion-of-post.store";

export const useGetEmotionOfPost = ({
  postId,
  emotionId,
}: {
  postId: any;
  emotionId: number;
}) => {
  const [emotionOfPost, _] = useRecoilState(emotionOfPostState);
  const { data, isLoading } = useQuery({
    queryKey: ["emotion_of_post", postId, emotionId],
    queryFn: () => apiGetEmotionOfPost(postId, emotionId),
    enabled: emotionOfPost.emotionId || emotionOfPost.postId,
  });
  return {
    emotion: data,
    isLoading,
  };
};
