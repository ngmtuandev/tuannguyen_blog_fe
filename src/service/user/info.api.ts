import api from "../../config/client.axios.api";

export const apiGetInfoCurrent = async () => {
  const response = await api.get(`/user/info-current`);
  return response.data;
};
