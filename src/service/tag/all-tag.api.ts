import api from "../../config/client.axios.api";

export const apiGetTags = async () => {
  const response = await api.get(`/tag/filter`);
  return response.data;
};
