
import ReactForm from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import RootLayouts from "@/components/Layouts/RootLayouts";
import Divider from "@/components/PageComponents/LoginAndRegisterPage/Divider";
import GoogleLoginButton from "@/components/PageComponents/LoginAndRegisterPage/GoogleLoginButton";
import RedirectUserButton from "@/components/PageComponents/LoginAndRegisterPage/RedirectUserButton";
import SideImageContainer from "@/components/PageComponents/LoginAndRegisterPage/SideImageContainer";
import { LoginPageImage } from "@/components/constant/constant";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

export default function SignInPage() {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      
    } catch (error) {}
  };
  return (
    <>
      <section className="border-red-500 bg-gray-200 py-20 flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-lg shadow-lg max-w-4xl">
          <div className="md:w-1/2 px-5">
            <h2 className="text-3xl font-bold text-[#002D74] font-sans">
              {" "}
              Sign Up
            </h2>
            <p className="text-sm mt-4 text-[#002D74] font-semibold text-[15px]">
              If you have not an account, please login
            </p>

            <ReactForm submitHandler={onSubmit}>
              <div>
                <FormInput
                  name="username"
                  type="text"
                  id=""
                  label="Name"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mt-4">
                <FormInput
                  name="email"
                  type="email"
                  id=""
                  label="Name"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mt-4">
                <FormInput
                  type="password"
                  id=""
                  placeholder="Enter Password"
                  name="password"
                  label="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Sign Up
              </button>
            </ReactForm>
            <Divider />
            <GoogleLoginButton />
            <RedirectUserButton path="/auth/login" buttonValue={"Log In"} />
          </div>

          <SideImageContainer ImageUrl={LoginPageImage} />
        </div>
      </section>
    </>
  );
}

//layout
SignInPage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
