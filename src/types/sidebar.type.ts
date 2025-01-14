export type SidebarLinksType = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

export type SidebarMenuLinksType = SidebarLinksType & {
  subMenu: boolean;
  subMenuItems?: SidebarLinksType[];
};
