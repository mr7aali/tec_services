import DashbordLayouts from "@/components/Layouts/DashbordLayouts";


const UserDashBoarPage = () => {
  return (
    <div>
      <h1>User dash board</h1>
    </div>
  );
};

export default UserDashBoarPage;


UserDashBoarPage.getLayout = function getLayout(page: any) {
    return <DashbordLayouts>{page}</DashbordLayouts>;
  };