import { atom } from "recoil";
import { handleGetLocalStorage } from "../helper/Xfunction";
import { LANGUAGE } from "../utils/constant";

export const languageState = atom({
    key: 'languageState',
    default: handleGetLocalStorage(LANGUAGE.KEY)
})