import { t } from "i18next";
import { SidebarMenuLinksType } from "src/types/sidebar.type";
// ---- icons import ----
import { HomeIcon } from "@icons/home.icon";
import { EmailIcon } from "@icons/email.icon";
import { InboxIcon } from "@icons/inbox.icon";
import { ComposeIcon } from "@icons/compose.icon";
import { CheckIcon } from "@icons/check.icon";
import { ListIcon } from "@icons/list.icon";
import { AddUserIcon } from "@icons/add-user.icon";
import { EditIcon } from "@icons/edit.icon";
import { ProfileIcon } from "@icons/profile.icon";
import { CalendarIcon } from "@icons/calendar.icon";
import { ChatIcon } from "@icons/chat.icon";

export const SidebarMenuLinks: SidebarMenuLinksType[] = [
  {
    title: t("sidebar.links.dashboard"),
    href: "/",
    icon: <HomeIcon />,
    subMenu: false,
  },
  {
    title: t("sidebar.links.email"),
    href: "/email",
    icon: <EmailIcon />,
    subMenu: true,
    subMenuItems: [
      {
        title: t("sidebar.links.inbox"),
        href: "/email/inbox",
        icon: <InboxIcon />,
      },
      {
        title: t("sidebar.links.email_compose"),
        href: "/email/compose",
        icon: <ComposeIcon />,
      },
    ],
  },
  {
    title: t("sidebar.links.doctor"),
    href: "/doctor",
    icon: <CheckIcon />,
    subMenu: true,
    subMenuItems: [
      {
        title: t("sidebar.links.all_doctor"),
        href: "/doctor/all",
        icon: <ListIcon />,
      },
      {
        title: t("sidebar.links.add_doctor"),
        href: "/doctor/add",
        icon: <AddUserIcon />,
      },
      {
        title: t("sidebar.links.profile_doctor"),
        href: "/doctor/profile",
        icon: <ProfileIcon />,
      },
      {
        title: t("sidebar.links.edit_doctor"),
        href: "/doctor/edit",
        icon: <EditIcon />,
      },
    ],
  },
  {
    title: t("sidebar.links.calendar"),
    href: "/calendar",
    icon: <CalendarIcon />,
    subMenu: false,
  },
  {
    title: t("sidebar.links.chat"),
    href: "/chat",
    icon: <ChatIcon />,
    subMenu: false,
  },
];
