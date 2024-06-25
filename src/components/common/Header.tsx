import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Search from "../search/Search";
import Buttons from "./Button";
import { NavLink } from "react-router-dom";
import path from "../../utils/path";
import DropdownLanguage from "./DropdownLanguage";
import withTranslation from "../../hocs/withTranslation";
import SwitchDarkMode from "./SwitchDarkMode";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../store/dark-mode.store";
import { handleGetLocalStorage } from "../../helper/Xfunction";
import { DARK_MODE } from "../../utils/constant";
import { useGetAuth } from "../../hooks";
import { dataUserState } from "../../store/user.store";
import UserHeader from "../user/UserHeader";
const Header = ({ t }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { dataUser } = useGetAuth();

  const menuItems = ["Profile", "Dashboard"];
  const [darkMode, _] = useRecoilState(darkModeState);
  const [dataInfoUser, setDataInfoUser] = useRecoilState(dataUserState);

  useEffect(() => {
    const dark = handleGetLocalStorage(DARK_MODE.KEY);

    if (dark === DARK_MODE.DARK) {
      document.documentElement.classList.add(DARK_MODE.DARK);
    } else {
      document.documentElement.classList.remove(DARK_MODE.DARK);
    }
  }, [darkMode]);

  useEffect(() => {
    if (dataUser) setDataInfoUser(dataUser?.data);
  }, [dataUser]);

  return (
    <Navbar className="py-4" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit md:text-[40px] font-sans">TN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("header.blog")}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            {t("header.about_me")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("header.media")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <Search></Search>
      <SwitchDarkMode></SwitchDarkMode>
      <DropdownLanguage></DropdownLanguage>
      {dataInfoUser ? (
        <UserHeader
          name={dataInfoUser?.userName}
          email={dataInfoUser?.email}
        ></UserHeader>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href={path.LOGIN}>{t("header.login")}</Link>
          </NavbarItem>
          <NavbarItem>
            <NavLink to={path.REGISTER}>
              <Buttons title={t("header.register")}></Buttons>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default withTranslation(Header);
