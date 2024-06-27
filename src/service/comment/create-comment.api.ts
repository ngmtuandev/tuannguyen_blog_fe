import api from "../../config/client.axios.api";
import { TCreateComment } from "../../types";

export const apiCreateComment = async (commentInfo: TCreateComment) => {
  const response = await api.post(`/comment`, commentInfo);
  return response.data;
};
