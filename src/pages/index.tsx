import ServiceCard from "@/components/Card/ServiceCard";
import RootLayouts from "@/components/Layouts/RootLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";

import SideDrawer from "@/components/ui/SideDrawer";

import { IService } from "@/interface/type";
import { useState, useEffect } from "react";

const HomePage = () => {
  //{ service }: { service: IResponseType<IService[]> }
  const [data, setData] = useState([]);
  const [DrawerData, setDrawerData] = useState([]);
  
  
 

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/api/v1/service/get");
      const data = await res.json();

      setData(data.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <HeadTag
        title={"Othoba home"}
        descriptionContent={"Tech products home page"}
      />
      <h2 className="mt-5 text-center text-5xl">Available Service</h2>

      <div className="grid grid-cols-3 my-24">
        {data.map((s: IService) => (
          <div key={s.service_id} className="mx-auto">
            <ServiceCard service={s} DrawerData={DrawerData} setDrawerData={setDrawerData}/>
          </div>
        ))}
      </div>
      <div>
       
        <SideDrawer DrawerData={DrawerData} />
      </div>
      
    </div>
  );
};

export default HomePage;

//layout
HomePage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
