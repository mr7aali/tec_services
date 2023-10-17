import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
import { UserOutlined } from "@ant-design/icons";
import { USER_ROLE } from "@/interface/role";
export const SideBarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "Account profile",
          key: "Account-profile",
        },
        {
          label: "Change Password",
          key: "change-pass",
        },
      ],
      label: "Profile",
    },
  ];

 if(USER_ROLE.USER === role){
    return defaultSidebarItems;
 }
};
