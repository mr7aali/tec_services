
import RootLayouts from "@/components/Layouts/RootLayouts";
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
