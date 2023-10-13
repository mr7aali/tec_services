import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import RootLayouts from "@/components/Layouts/RootLayouts";
import HeaderCom from "@/components/sheared/HeaderCom";
const HomePage = () => {
  
  return (
    <div>
      <h1>This is home page</h1>
     
    </div>
  );
};

export default HomePage;

//layout
HomePage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
