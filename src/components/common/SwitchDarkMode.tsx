import { Switch } from "@nextui-org/react";
import { SunIcon } from "../../assets/SunIcon";
import { MoonIcon } from "../../assets/MoonIcon";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../store/dark-mode.store";
import { DARK_MODE } from "../../utils/constant";
import {
  handleGetLocalStorage,
  handleSetLocalStorage,
} from "../../helper/Xfunction";
import { useEffect } from "react";

const SwitchDarkMode = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const handleChange = () => {
    setDarkMode(darkMode === DARK_MODE.DARK ? DARK_MODE.LIGHT : DARK_MODE.DARK);
    handleSetLocalStorage(
      DARK_MODE.KEY,
      darkMode === DARK_MODE.DARK ? DARK_MODE.LIGHT : DARK_MODE.DARK
    );
  };

  useEffect(() => {
    const savedMode = handleGetLocalStorage(DARK_MODE.KEY);
    if (savedMode) {
      setDarkMode(savedMode);
    } else {
      setDarkMode(DARK_MODE.DARK);
    }
  }, []);

  return (
    <div>
      <Switch
        defaultSelected={darkMode === DARK_MODE.DARK ? false : true}
        size="md"
        value={darkMode}
        color="primary"
        onChange={handleChange}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>
    </div>
  );
};

export default SwitchDarkMode;
