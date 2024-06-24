import { TRegister } from "../../types";
import api from "../../config/client.axios.api";

export const apiRegister = async (registerInfo: TRegister) => {
  const response = await api.post(`/user/register`, registerInfo);
  return response.data;
};

export const apiConfirmRegister = async ({ code }: { code: number }) => {
  const response = await api.post(`/user/confirm`, { code: +code });
  return response.data;
};
