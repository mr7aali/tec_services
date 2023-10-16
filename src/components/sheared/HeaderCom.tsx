import {
  UserAddOutlined,
  PhoneOutlined,
  SearchOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { HeaderTop } from "../ui/HeaderTop";

const HeaderCom = () => {
  return (
    <>
      <HeaderTop />
      <div className="w-[1400px] mx-auto flex ">
        <div className=" flex items-center flex-1">
          <Link
            href={"/"}
            style={{
              padding: "0",
              width: "128px",
              height: "128px",
            }}
          >
            <Image
              style={{ border: "1px solid red" }}
              src="https://images.othoba.com/images/thumbs/0194842.png"
              alt=""
              width={128}
              height={128}
            />
          </Link>

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
            <Link
              href={"/dashbord"}
              className="px-2 flex  flex-col items-center justify-center hover:text-[#007aff] cursor-pointer"
            >
              <InboxOutlined className="text-[32px] text-[#000] hover:text-[#007aff] cursor-pointer" />

              <small className="text-[13px]">Dashboard</small>
            </Link>
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
