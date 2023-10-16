import ServiceCard from "@/components/Card/ServiceCard";
import RootLayouts from "@/components/Layouts/RootLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";
import { IResponseType, IService } from "@/interface/type";
import { GetStaticProps } from "next";
const HomePage = ({ data }: IResponseType<IService[]>) => {
  console.log(data);
  return (
    <div>
      <HeadTag
        title={"Othoba home"}
        descriptionContent={"Tech products home page"}
      />
      <h1>This is home page</h1>
      <div className="flex justify-center my-20">
        <ServiceCard />
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
  const url = `${BaseUrl}/service/create`;
  console.log(url);
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
