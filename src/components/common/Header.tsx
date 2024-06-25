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
import { NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();

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
    <Navbar
      className="py-4 w-full gap-12"
      style={{ minWidth: "100%" }}
      onMenuOpenChange={setIsMenuOpen}
    >
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
        <NavbarItem
          isActive={
            location.pathname.slice(1, location.pathname.length) === path.BLOG
          }
        >
          <NavLink color="foreground" to={path.BLOG}>
            {t("header.blog")}
          </NavLink>
        </NavbarItem>
        <NavbarItem
          isActive={
            location.pathname.slice(1, location.pathname.length) ===
            path.ABOUT_ME
          }
        >
          <NavLink color="foreground" to={path.ABOUT_ME} aria-current="page">
            {t("header.about_me")}
          </NavLink>
        </NavbarItem>
        <NavbarItem
          isActive={
            location.pathname.slice(1, location.pathname.length) ===
            path.SOCIAL_MEDIA
          }
        >
          <NavLink color="foreground" to={path.SOCIAL_MEDIA}>
            {t("header.media")}
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <Search></Search>
      <div className="flex items-center gap-2">
        <SwitchDarkMode></SwitchDarkMode>
        <DropdownLanguage></DropdownLanguage>
      </div>
      {dataInfoUser ? (
        <UserHeader
          name={dataInfoUser?.userName}
          email={dataInfoUser?.email}
        ></UserHeader>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <NavLink to={path.LOGIN}>{t("header.login")}</NavLink>
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
