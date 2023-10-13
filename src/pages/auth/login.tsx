/* eslint-disable react/no-unescaped-entities */
import RootLayouts from "@/components/Layouts/RootLayouts";
import Login from "@/components/sheared/Login";
const LoginPage = () => {
  return <Login />;
};

export default LoginPage;

//layout
LoginPage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
