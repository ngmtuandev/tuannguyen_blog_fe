import api from "../../config/client.axios.api";
import { TCreateEmotionOfPost } from "../../types";

export const apiCreateEmotion = async (emtionInfo: TCreateEmotionOfPost) => {
  const response = await api.post(`/post-emotion`, emtionInfo);
  return response.data;
};
