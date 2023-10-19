import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import RootLayouts from "@/components/Layouts/RootLayouts";
import Divider from "@/components/PageComponents/LoginAndRegisterPage/Divider";
import GoogleLoginButton from "@/components/PageComponents/LoginAndRegisterPage/GoogleLoginButton";
import RedirectUserButton from "@/components/PageComponents/LoginAndRegisterPage/RedirectUserButton";
import SideImageContainer from "@/components/PageComponents/LoginAndRegisterPage/SideImageContainer";
import { LoginPageImage } from "@/components/constant/constant";

import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/service/auth.service";
import { NextRouter, useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  id: string;
  password: string;
  email: string;
};

const LoginPage = () => {
  const router: NextRouter = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const resData = await userLogin({
        email: data.email,
        password: data.password,
      }).unwrap();

      
   
      if (resData.success) {
        storeUserInfo(resData.token);
        toast.success("logged in successfully!");
      }

      const isLogged = isLoggedIn();

      if (isLogged) {
        router.push("/dashbord");
      }
    } catch (error) {}
  };

  return (
    <div
      style={{
        transition: "all 2s .5s",
      }}
    >
      <section className="border-red-500 d-none bg-gray-200 py-20 flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex items-center rounded-lg shadow-lg max-w-4xl">
          <SideImageContainer ImageUrl={LoginPageImage} />
          <div className="md:w-1/2 px-5 py-0 ">
            <h2 className="text-3xl font-bold text-[#002D74] font-sans">
              Login
            </h2>
            <p className="text-sm mt-4 text-[#002D74] font-semibold text-[15px] mb-4">
              If you have an account, please login
            </p>

            <Form submitHandler={onSubmit}>
              <div className="">
                <FormInput
                  name="email"
                  type="text"
                  id=""
                  label="Name"
                  placeholder="Enter Your Name"
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

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Log In
                
              </button>
            </Form>
            <Divider />
            {/* <GoogleLoginButton /> */}
            <RedirectUserButton path="/auth/signup" buttonValue="Sign Up" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;

//layout
LoginPage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
