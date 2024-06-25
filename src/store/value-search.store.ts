import { atom } from "recoil";

export const valueSearchState = atom<string>({
  key: "valueSearchState",
  default: '',
});
