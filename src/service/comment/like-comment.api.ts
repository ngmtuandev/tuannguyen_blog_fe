import api from "../../config/client.axios.api";

export const apiLikeComment = async (commentId: number) => {
  const response = await api.patch(`/comment`, { commentId });
  return response.data;
};
