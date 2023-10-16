import ServiceCard from "@/components/Card/ServiceCard";
import RootLayouts from "@/components/Layouts/RootLayouts";
const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <div className="flex justify-center my-20">
        <ServiceCard />
      </div>
    </div>
  );
};

export default HomePage;

//layout
HomePage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
