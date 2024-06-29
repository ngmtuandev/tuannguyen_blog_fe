import { Dropdown, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useGetAllNotification } from "../../hooks";
import { TNotification } from "../../types";
import { formatDate } from "../../helper/Xfunction";
import { NavLink } from "react-router-dom";
import path from "../../utils/path";

const Notification = ({ children }: any) => {
  const { dataNotification } = useGetAllNotification();
  return (
    <div className="">
      <Dropdown>
        {children}
        <DropdownMenu
          variant="faded"
          aria-label="Dropdown menu with description"
        >
          {dataNotification &&
            dataNotification?.map((item: TNotification, index: number) => {
              return (
                <DropdownItem key={index}>
                  <NavLink
                    to={`${path.BLOG}/${item.postId}`}
                    state={[{ postid: item?.postId }, undefined, item.postId]}
                  >
                    <div className="flex justify-center flex-col">
                      <div>
                        <span>{item?.message}</span>
                      </div>
                      <div>
                        <small className="font-semibold">
                          {formatDate(item?.createdAt)}
                        </small>
                      </div>
                    </div>
                  </NavLink>
                </DropdownItem>
              );
            })}
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Notification;
