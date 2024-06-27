import api from "../../config/client.axios.api";

export const apiFindItemPost = async (
  postId: number | string,
  language: string
) => {
  const response = await api.get(`/post/find-by-id/${postId}`, {
    headers: {
      language,
    },
  });
  return response.data;
};
