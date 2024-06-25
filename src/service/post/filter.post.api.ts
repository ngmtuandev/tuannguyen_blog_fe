import api from "../../config/client.axios.api";
import { TFindPost } from "../../types";

export const apiFindFilterPost = async (findPostInfo: TFindPost) => {
  const response = await api.post(`/post/find-all`, findPostInfo);
  return response.data;
};
