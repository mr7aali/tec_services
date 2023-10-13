import RootLayouts from "@/components/Layouts/RootLayouts";
import Divider from "@/components/PageComponents/LoginAndRegisterPage/Divider";
import GoogleLoginButton from "@/components/PageComponents/LoginAndRegisterPage/GoogleLoginButton";
import RedirectUserButton from "@/components/PageComponents/LoginAndRegisterPage/RedirectUserButton";
import SideImageContainer from "@/components/PageComponents/LoginAndRegisterPage/SideImageContainer";
import { LoginPageImage } from "@/components/constant/constant";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function SignInPage() {
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

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700 font-semibold text-[15px]">
                  Name
                </label>
                <input
                  type="text"
                  id=""
                  placeholder="Enter Your Name"
                  className="w-[90%] px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 font-semibold text-[15px]">
                  Email Address
                </label>
                <input
                  type="email"
                  id=""
                  placeholder="Enter Email Address"
                  className="w-[90%] block px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  // autoComplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 font-semibold text-[15px]">
                  Password
                </label>
                <input
                  type="password"
                  id=""
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-[90%] px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  {/* Forgot Password? */}
                </a>
              </div>

              <button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Sign Up
              </button>
            </form>
            <Divider />
            <GoogleLoginButton />
            <RedirectUserButton path="/auth/login" />
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
