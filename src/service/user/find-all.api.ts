import api from "../../config/client.axios.api";

export const apiFindUserAll = async () => {
    const response = await api.get(`/user/find-all`);
    return response.data;
};