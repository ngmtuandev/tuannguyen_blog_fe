import api from "../../config/client.axios.api";
import { TGetComment } from "../../types";

export const apiGetComments = async (commentInfo: TGetComment) => {
  const response = await api.post(`/comment/find-all`, commentInfo);
  return response.data;
};
