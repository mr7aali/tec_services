import DashbordLayouts from '@/components/Layouts/DashbordLayouts';


const DashbordPage = () => {
  return (
    <div>
      <h1>Dash Board</h1>
    </div>
  );
};

export default DashbordPage;

DashbordPage.getLayout = function getLayout(page: any) {
    return <DashbordLayouts>{page}</DashbordLayouts>;
  };