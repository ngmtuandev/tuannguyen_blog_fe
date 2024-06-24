import { atom } from "recoil";
import { DARK_MODE } from "../utils/constant";
import { handleGetLocalStorage } from "../helper/Xfunction";

export const darkModeState = atom({
  key: "darkModeState",
  default: handleGetLocalStorage(DARK_MODE.KEY) || DARK_MODE.LIGHT,
});
