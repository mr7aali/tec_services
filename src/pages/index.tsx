import ServiceCard from "@/components/Card/ServiceCard";
import RootLayouts from "@/components/Layouts/RootLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";
import { IResponseType, IService } from "@/interface/type";
import { GetStaticProps } from "next";
const HomePage = ({ data }: { data: IResponseType<IService[]> }) => {
  console.log(data.statusCode);
  return (
    <div className="container mx-auto">
      <HeadTag
        title={"Othoba home"}
        descriptionContent={"Tech products home page"}
      />

      <h2 className="mt-5 text-center text-5xl">Available Service</h2>
      <div className="grid grid-cols-3 my-24">
        {data?.data?.map((s) => (
          <div key={s.service_id} className="mx-auto">
            <ServiceCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  const BaseUrl = process.env.BASE_URL;
  const url = `${BaseUrl}/service/get`;

  const res = await fetch("http://localhost:5000/api/v1/service/get");
  const data = await res.json();
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: Repo;
}>;
//layout
HomePage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
