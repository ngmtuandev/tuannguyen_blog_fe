import api from "../../config/client.axios.api";

export const apiDeleteComment = async (commentId: number) => {
  const response = await api.delete(`/comment`, {
    data: { commentId },
  });
  return response.data;
};
