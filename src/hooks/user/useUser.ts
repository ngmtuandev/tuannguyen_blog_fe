import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRegister } from "../../service";

import { TRegister } from "../../types";

export const useUserRegister = () => {
  return useMutation({
    mutationFn: (registerInfo: TRegister) => apiRegister(registerInfo),
  });
};

// export const useGetAuth = () => {
//   const { isLogin } = useAuth();
//   const { data, isLoading } = useQuery({
//     queryKey: ["me"],
//     queryFn: () => getUser(),
//     enabled: isLogin,
//   });
//   return {
//     dataUser: data,
//     isLoading,
//   };
// };
