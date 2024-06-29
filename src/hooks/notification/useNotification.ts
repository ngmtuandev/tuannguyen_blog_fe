import { useQuery } from "@tanstack/react-query";
import { apiFindAllNotification } from "../../service";

export const useGetAllNotification = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => apiFindAllNotification(),
  });
  return {
    dataNotification: data?.data,
    isLoading,
  };
};
