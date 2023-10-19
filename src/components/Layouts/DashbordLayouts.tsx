import { Layout } from "antd";
import Sidebar from "../ui/Sidebar";
import Contents from "../ui/Contents";
import HeaderCom from "../sheared/HeaderCom";
import Footer from "../sheared/Footer";
import { isLoggedIn } from "@/service/auth.service";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import Sidebar from "../ui/Sidebar";

const DashbordLayouts = ({ children }: { children: React.ReactNode }) => {


const userLoggedIn = isLoggedIn();
const router = useRouter();
useEffect(()=>{
if (!userLoggedIn){
  router.push('/auth/login')
}
},[router,userLoggedIn])

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
