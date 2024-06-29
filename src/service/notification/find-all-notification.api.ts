import api from "../../config/client.axios.api";

export const apiFindAllNotification = async () => {
  const response = await api.get(`/notification/find-all`);
  return response.data;
};
