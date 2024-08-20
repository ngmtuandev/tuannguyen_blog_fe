import api from "../../config/client.axios.api";

export const apiDeleteUser = async (id: number) => {
    const response = await api.delete(`/user`, {
        data: { id }
    });
    return response.data;
};
