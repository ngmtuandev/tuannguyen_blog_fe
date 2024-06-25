import api from "../../config/client.axios.api";

export const apiGetEmotionOfPost = async (postId: number, emotionId: number) => {
  const response = await api.get(
    `/post-emotion/find-detail-emotion/${postId}/${emotionId}`
  );
  return response.data;
};
