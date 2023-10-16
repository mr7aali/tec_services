import DashbordLayouts from "@/components/Layouts/DashbordLayouts";


const AdminDashBoardPage = () => {
  return (
    <div>
      <h1>Admin dash board page</h1>
    </div>
  );
};

export default AdminDashBoardPage;


AdminDashBoardPage.getLayout = function getLayout(page: any) {
    return <DashbordLayouts>{page}</DashbordLayouts>;
  };