import api from "../../config/client.axios.api";
import { TLogin } from "../../types";

export const apiLogin = async (loginInfo: TLogin) => {
  const response = await api.post(`/auth/login`, loginInfo);
  return response.data;
};
