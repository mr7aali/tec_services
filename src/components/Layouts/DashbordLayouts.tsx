import { Layout } from "antd";
import Sidebar from "../ui/Sidebar";
import Contents from "../ui/Contents";
import HeaderCom from "../sheared/HeaderCom";
import Footer from "../sheared/Footer";
// import Sidebar from "../ui/Sidebar";

const DashbordLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <HeaderCom/>
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
    {/* <Footer/> */}
    </>
  );
};

export default DashbordLayouts;
