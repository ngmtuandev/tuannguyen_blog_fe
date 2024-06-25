import { atom } from "recoil";

export const tagState = atom<number>({
  key: "tagState",
  default: undefined,
});
