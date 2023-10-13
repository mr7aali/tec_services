import RootLayouts from "@/components/Layouts/RootLayouts";
import Resister from "@/components/sheared/Resister";

const SignInPage = () => {
  return (
    <div>
      <Resister />
    </div>
  );
};

export default SignInPage;

//layout
SignInPage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
