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
import { useState } from "react";
import Search from "../search/Search";
import Buttons from "./Button";
import { NavLink } from "react-router-dom";
import path from "../../utils/path";
import DropdownLanguage from "./DropdownLanguage";
import withTranslation from "../../hocs/withTranslation";
const Header = ({ t }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Profile", "Dashboard"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit font-sans">TUAN NGUYEN</p>
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
      <DropdownLanguage></DropdownLanguage>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">{t("header.login")}</Link>
        </NavbarItem>
        <NavbarItem>
          <NavLink to={path.REGISTER}>
            <Buttons title={t("header.register")}></Buttons>
          </NavLink>
        </NavbarItem>
      </NavbarContent>
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
