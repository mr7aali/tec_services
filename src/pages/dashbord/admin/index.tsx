import DashbordLayouts from "@/components/Layouts/DashbordLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";
import type {  GetStaticProps } from 'next';
const AdminDashBoardPage = () => {
  return (
    <div>
      <HeadTag title={"Dashboard/admin"} descriptionContent={"Dashboard"} />
      <h1>Admin dash board page</h1>
    </div>
  );
};

export default AdminDashBoardPage;




 









//layout
AdminDashBoardPage.getLayout = function getLayout(page: any) {
  return <DashbordLayouts>{page}</DashbordLayouts>;
};
