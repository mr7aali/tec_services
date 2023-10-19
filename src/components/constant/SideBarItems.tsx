import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { USER_ROLE } from "@/interface/role";
import Link from "next/link";
import DashbordLayouts from "../Layouts/DashbordLayouts";
export const SideBarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      key: "profile",
      icon: <UserOutlined />,
      // children: [
      //   {
      //     label: "Account profile",
      //     key: "Account-profile",
      //   },
      //   {
      //     label: <Link href={'/dashbord/user/service-history'}>Service History</Link>,
      //     key: "change-pass",
      //   },
      // ],
      label: <Link href={"/dashbord"}>Profile</Link>,
    },
    {
      key: "ServiceHistory",
      label: <Link href={"/dashbord/user/service-history"}>Service History</Link>,
      icon: <HistoryOutlined />,
    },
  ];

  if (USER_ROLE.USER === role) {
    return defaultSidebarItems;
  }
};



