import { useRecoilState } from "recoil";
import { TUserHeader } from "../../types";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { dataUserState, isLoginState } from "../../store/user.store";
import { USER_LOCAL } from "../../utils/constant";
import { NavLink } from "react-router-dom";
import path from "../../utils/path";

const UserHeader = ({ name, avatar, email }: TUserHeader) => {
  const [_, setIsLogin] = useRecoilState(isLoginState);
  const [__, setDataInfoUser] = useRecoilState(dataUserState);
  const handleLogout = () => {
    setIsLogin(false);
    setDataInfoUser(undefined);
    localStorage.removeItem(USER_LOCAL.KEY);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <User
          className="cursor-pointer"
          name={name}
          description={email}
          avatarProps={{
            src: avatar ?? "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <NavLink to={path.EDIT_PROFILE}>Edit Info</NavLink>
        </DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Logout</DropdownItem>
        <DropdownItem
          onClick={handleLogout}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserHeader;
