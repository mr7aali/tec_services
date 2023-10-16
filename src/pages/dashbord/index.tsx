import DashbordLayouts from '@/components/Layouts/DashbordLayouts';
import HeadTag from '@/components/sheared/utlis/HeaderTag';


const DashbordPage = () => {
  return (
    <div>
       <HeadTag title={'Dashboard/user'} descriptionContent={"Dashboard"} />
      <h1>Dash Board</h1>
    </div>
  );
};

export default DashbordPage;

DashbordPage.getLayout = function getLayout(page: any) {
    return <DashbordLayouts>{page}</DashbordLayouts>;
  };