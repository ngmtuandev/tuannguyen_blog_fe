import BreadcrumbsCustom from "../common/Breadcrumbs";
// import { Avatar, AvatarGroup } from "@nextui-org/react";
// import { Great, Good, Like } from "../../assets/index";

const HeaderPostItemDetail = ({ post_item }: any) => {
  return (
    <div className=" flex justify-between items-center">
      <BreadcrumbsCustom></BreadcrumbsCustom>
      <div>
        {/* <AvatarGroup
          max={3}
          total={10}
          renderCount={(count) => (
            <p className="text-small text-foreground font-medium ms-2">
              +{count} others
            </p>
          )}
        >
          <Avatar size="sm" className="object-cover" src={Great} />
          <Avatar size="sm" className="object-cover" src={Good} />
          <Avatar size="sm" className="object-cover" src={Like} />
        </AvatarGroup> */}
        <small className="my-2 font-semibold">{post_item?.view} lượt đọc</small>
      </div>
    </div>
  );
};

export default HeaderPostItemDetail;
