import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router";
import { SidebarMenuLinks } from "@data/sidebar";
import {
  SidebarLinksType,
  SidebarMenuLinksType,
} from "../../../types/sidebar.type";
import { customeStyles } from "./custome-style";

export const SidebarMenu: React.FC = () => {
  // ---- return jsx ----
  return (
    <Sidebar rootStyles={customeStyles}>
      <Menu>
        {SidebarMenuLinks.map((link: SidebarMenuLinksType) =>
          link.subMenu ? (
            <SubMenu label={link.title} icon={link.icon}>
              {link?.subMenuItems?.map((subMenuLink: SidebarLinksType) => (
                <MenuItem component={<Link to={subMenuLink.href} />}>
                  {subMenuLink.icon}
                  {subMenuLink.title}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem component={<Link to={link.href} />}>
              {link.icon}
              {link.title}
            </MenuItem>
          )
        )}
      </Menu>
    </Sidebar>
  );
};
