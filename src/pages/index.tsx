import ServiceCard from "@/components/Card/ServiceCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import RootLayouts from "@/components/Layouts/RootLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";
import TemporaryDrawer from "@/components/ui/TemporaryDrawer";

const HomePage = ({ service }: { service: IResponseType<IService[]> }) => {
  //{ data }: { data: IResponseType<IService[]> }
  //
  console.log(service.data);
  return (
    <div className="container mx-auto">
      <HeadTag
        title={"Othoba home"}
        descriptionContent={"Tech products home page"}
      />
      <h2 className="mt-5 text-center text-5xl">Available Service</h2>

      <div className="grid grid-cols-3 my-24">
        {service.data.map((s: IService) => (
          <div key={s.service_id} className="mx-auto">
            <ServiceCard />
            {/* //service={s} */}
          </div>
        ))}
      </div>
      <div>
        {" "}
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default HomePage;

//layout
HomePage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};

import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { IResponseType, IService } from "@/interface/type";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/service/get");
  const repo = await res.json();

  return {
    props: {
      service: repo,
    },
  };
};
