import { useMutation, useQuery } from "@tanstack/react-query";
import { apiGetInfoCurrent, apiLogin, apiRegister } from "../../service";

import { TLogin, TRegister } from "../../types";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../store/user.store";
import { handleGetLocalStorage } from "../../helper/Xfunction";
import { USER_LOCAL } from "../../utils/constant";

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
