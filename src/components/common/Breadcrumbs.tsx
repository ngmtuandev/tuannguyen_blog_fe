import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { NavLink, useLocation } from "react-router-dom";

const BreadcrumbsCustom = () => {
  const location = useLocation();
  const convertedSegments = location.pathname
    .split("/")
    .map((segment) => (segment === "" ? "home" : segment));

  return (
    <div>
      <Breadcrumbs key={"solid"} variant={"solid"}>
        {convertedSegments.map((item) => (
          <BreadcrumbItem>
            <NavLink
              to={
                item !== convertedSegments[convertedSegments?.length - 1]
                  ? `/${item}`
                  : ""
              }
            >
              {item}
            </NavLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsCustom;
