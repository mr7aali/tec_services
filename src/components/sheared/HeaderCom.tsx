import {
  UserAddOutlined,
  PhoneOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const HeaderCom = () => {
  return (
    <>
      <HeaderTop />
      <div className="w-[1400px] mx-auto flex ">
        <div className=" flex items-center flex-1">
          <div
            style={{
              padding: "0",
              width: "128px",
              height: "128px",
            }}
          >
            <Image
              src="https://images.othoba.com/images/thumbs/0194842.png"
              alt=""
              width={128}
              height={128}
            />
          </div>

          <div
            style={{ border: "1px solid #eee" }}
            className="flex flex-1 mx-[70px]"
          >
            <input
              type="text"
              className="w-full p-[10px] border-none outline-none "
              placeholder="Search here..."
            />
            <button className="ml-[-5px] border-none cursor-pointer px-[15px] text-2xl">
              <SearchOutlined />{" "}
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <PhoneOutlined className="text-[32px] text-[#000] mr-2" />
            <span className="">
              <p>Email or:</p>
              <p className="font-[700] text-[#000] font-sans hover:text-[#007aff] cursor-pointer">
                01967519057
              </p>
            </span>
          </div>

          <span className="mx-5 w-[1px] h-[20px] bg-[#ccc]"></span>

          <div className=" flex">
            <span className="px-2 flex  flex-col items-center justify-center hover:text-[#007aff] cursor-pointer">
              <UserAddOutlined className="text-[32px] text-[#000] hover:text-[#007aff] cursor-pointer" />
              <small className="text-[13px]">Wishlist</small>
            </span>
            <span className="px-2 flex  flex-col items-center justify-center hover:text-[#007aff] cursor-pointer">
              <UserAddOutlined className="text-[32px] text-[#000] hover:text-[#007aff] cursor-pointer" />
              <small className="text-[13px]">Wishlist</small>
            </span>
            <span className="px-2 flex  flex-col items-center justify-center hover:text-[#007aff] cursor-pointer">
              <UserAddOutlined className="text-[32px] text-[#000] hover:text-[#007aff] cursor-pointer" />
              <small className="text-[13px]">Wishlist</small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCom;

const HeaderTop = () => {
  return (
    <div className="bg-[#f5f6f8]">
      <div className="max-w-[1360px] mx-auto flex items-center py-1 ">
        <div>
          <h5 className="text-[11px] line-clamp-2 uppercase">
            Welcome to Othoba .Com
          </h5>
        </div>

        <div className="flex justify-between items-center ml-auto">
          <h5 className="line-clamp-2 text-[11px]">Sell On Othoba</h5>
          <span className="mx-5 w-[1px] h-[20px] bg-[#ccc]"></span>
          <div className="flex justify-between items-center ">
            <p className="m-2 ">
              <Link href={'/auth/login'} className="p-2 text-[11px] text-[#000] font-bold cursor-pointer hover:text-[#007aff]">
                <span className="text-[15px]">
                  <UserAddOutlined /> 
                </span>{" "}
                 Sign In
              </Link>
              <span className="text-[11px] font-bold mx-2">/</span>
              <Link href={"/auth/signup2"} className="text-[11px] font-bold hover:text-[#007aff] cursor-pointer"> Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
