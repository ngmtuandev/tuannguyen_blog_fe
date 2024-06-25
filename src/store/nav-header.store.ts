import { atom } from "recoil";
import { NAV_HEADER } from "../utils/constant";

export const navState = atom({
  key: "navState",
  default: NAV_HEADER.BLOGS,
});
