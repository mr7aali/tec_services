import { Layout } from "antd";
import Sidebar from "../ui/Sidebar";
import Contents from "../ui/Contents";
// import Sidebar from "../ui/Sidebar";

const DashbordLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashbordLayouts;
