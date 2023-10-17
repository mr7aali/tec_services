import ServiceCard from "@/components/Card/ServiceCard";
import TestCard from "@/components/Card/TestCard";
import RootLayouts from "@/components/Layouts/RootLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";
import FloatButtonT from "@/components/ui/FloatButton";
import TemporaryDrawer from "@/components/ui/TemporaryDrawer";
import { IResponseType, IService } from "@/interface/type";

import { GetStaticProps } from "next";
const HomePage = ({ data }: { data: IResponseType<IService[]> }) => {
  //
  console.log(data);
  return (
    <div className="container mx-auto">
      <HeadTag
        title={"Othoba home"}
        descriptionContent={"Tech products home page"}
      />
      <h2 className="mt-5 text-center text-5xl">Available Service</h2>

      <div className="grid grid-cols-3 my-24">
        {data?.data?.map((s,i) => (
        <div key={i} className="mx-auto">
          <ServiceCard service={s}/>
        </div>
          ))
          }
      </div>
     <div> <TemporaryDrawer/></div>
    </div>
  );
};

export default HomePage;





import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Repo = {
  name: string
  stargazers_count: number
}
 
export const getServerSideProps = (async (context) => {
  const BaseUrl = process.env.BASE_URL;
  const url = `${BaseUrl}/service/get`;

  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  return { props: { data } }
}) satisfies GetServerSideProps<{
  data: Repo
}>




//layout
HomePage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
