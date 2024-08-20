import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFindUserAll, apiGetInfoCurrent, apiLogin, apiRegister } from "../../service";

import { TLogin, TRegister } from "../../types";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../store/user.store";
import { handleGetLocalStorage } from "../../helper/Xfunction";
import { USER_LOCAL } from "../../utils/constant";
import { apiDeleteUser } from "../../service/user/delete.api";

export const useUserRegister = () => {
  return useMutation({
    mutationFn: (registerInfo: TRegister) => apiRegister(registerInfo),
  });
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: (loginInfo: TLogin) => apiLogin(loginInfo),
  });
};

export const useGetAuth = () => {
  const [isLogin, _] = useRecoilState(isLoginState);
  const { data, isLoading } = useQuery({
    queryKey: ["info"],
    queryFn: () => apiGetInfoCurrent(),
    enabled: isLogin || !!handleGetLocalStorage(USER_LOCAL.KEY),
  });
  return {
    dataUser: data,
    isLoading,
  };
};

export const useGetAll = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-all"],
    queryFn: () => apiFindUserAll(),
    enabled: true,
  });
  return {
    allUser: data,
    isLoading,
  };
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: number) => apiDeleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-all"],
      });
    },
  });
};

