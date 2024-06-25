import { atom } from "recoil";
import { IUserInfo } from "../interface";

export const isLoginState = atom({
  key: "isLoginState",
  default: false,
});

export const dataUserState = atom<IUserInfo | undefined>({
  key: "dataUserState",
  default: undefined,
});
