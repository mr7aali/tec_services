import DashbordLayouts from "@/components/Layouts/DashbordLayouts";
import HeadTag from "@/components/sheared/utlis/HeaderTag";
import { IUser } from "@/interface/type";
import { useGetUserQuery } from "@/redux/api/authApi";
import { getUserInfo } from "@/service/auth.service";

const DashbordPage = () => {
  const user = getUserInfo();

  const { data, isError, isLoading } = useGetUserQuery(user.user_id);

  // const profileUser: IUser = ;
  const profileUser: IUser = data?.data;
  console.log(profileUser);
  return (
    <div>
      <HeadTag descriptionContent="" title="" />
      {profileUser ? (
        <div className="p-16">
          <div className="p-8 bg-white shadow mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-[150px] text-center border-b pb-12">
              <h1 className="text-4xl font-medium text-gray-700">
                {profileUser.first_name} {profileUser.last_name}
                <span className="font-light text-gray-500"> </span>
              </h1>
              <p className="font-light text-gray-600 mt-3">
                {profileUser.address}
              </p>
              <p className="mt-8 text-gray-500">
                {profileUser.phone} - {profileUser.email}
              </p>
              <p className="mt-2 text-gray-500">
                University of Computer Science
              </p>

              <div className="m-5">
                <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                  <button className="text-white cursor-pointer py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Update
                  </button>
                  <button className="text-white cursor-pointer py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex justify-center items-center h-[80vh]">
          <p className="text-[30px]"> Loading....</p>
        </div>
      )}
    </div>
  );
};

export default DashbordPage;

DashbordPage.getLayout = function getLayout(page: any) {
  return <DashbordLayouts>{page}</DashbordLayouts>;
};
