import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import RootLayouts from "@/components/Layouts/RootLayouts";
import Divider from "@/components/PageComponents/LoginAndRegisterPage/Divider";
import GoogleLoginButton from "@/components/PageComponents/LoginAndRegisterPage/GoogleLoginButton";
import RedirectUserButton from "@/components/PageComponents/LoginAndRegisterPage/RedirectUserButton";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";




type FormValues = {
  id: string;
  password: string;
};
/* eslint-disable react/no-unescaped-entities */
export default function SignInPage() {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <>
      <section className="border-red-500 bg-gray-200 py-20 flex items-center justify-center">
        <div className="bg-gray-100 p-5 md:grid-cols-2 rounded-lg shadow-lg grid container">
          <div className="w-full md:block hidden ">
            <Image
              height={300}
              width={300}
              src={
                "https://i.ibb.co/GWhm1ZP/back-school-red-blue-background.jpg"
              }
              className="rounded-md h-full w-full"
              alt="page img"
            />
          </div>

          <div className="w-full">
            <h2 className="mx-5 text-3xl font-bold text-[#002D74] font-sans">
              {" "}
              Sign Up
            </h2>
            <p className="text-sm  mt-4 mx-5 text-[#002D74] font-semibold text-[15px]">
              If you have not an account, please login
            </p>

            <div className="mx-5">
              <Form submitHandler={onSubmit}>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div>
                    <FormInput
                      name="first_name"
                      type="text"
                      id=""
                      label="First Name"
                      placeholder="Enter Your first name"
                    />
                  </div>

                  <div className="">
                    <FormInput
                      name="last_name"
                      type="text"
                      id=""
                      label="Last Name"
                      placeholder="Enter Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="mt-4">
                    <FormInput
                      type="email"
                      id=""
                      placeholder="Enter email"
                      name="email"
                      label="Email"
                    />
                  </div>

                  <div className="mt-4">
                    <FormInput
                      type="phone"
                      id=""
                      placeholder="Enter phone number"
                      name="phone"
                      label="Phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="mt-4">
                    <FormInput
                      type="text"
                      id=""
                      placeholder="Enter email"
                      name="address"
                      label="Address"
                    />
                  </div>

                  <div className="mt-4">
                    <FormInput
                      type="password"
                      id=""
                      placeholder="Enter phone password"
                      name="password"
                      label="Password"
                    />
                  </div>
                </div>

               

           

                <button
                  type="submit"
                  className="w-full cursor-pointer block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                >
                  Sign Up
                </button>
              </Form>
            </div>

            <div className="mx-5">
              <Divider />
            </div>
            <div className="mx-5">
              <GoogleLoginButton />
            </div>

            <div className="mx-5">
              <RedirectUserButton path="/auth/login" buttonValue={"Log In"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//layout
SignInPage.getLayout = function getLayout(page: any) {
  return <RootLayouts>{page}</RootLayouts>;
};
