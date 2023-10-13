import { UserAddOutlined } from "@ant-design/icons";

const HeaderCom = () => {
  return (
    <>
      <HeaderTop />
      <div className="w-[1400px] mx-auto flex ">
        <div className="flex-1 flex items-center">
          <div className="">
            <img
              src="https://images.othoba.com/images/thumbs/0194842.png"
              alt=""
            />
          </div>
          <div className=" ">
          
            {/* // {/* //WishListContainer */}
            <input type="text" />
          </div>
        </div>

        <div className="flex items-center  ">
          <div className="flex items-center">
         
            {/* //EmailContaner */}
            <UserAddOutlined />
            <span  className="">
              <p>Email or:</p>
              <span className="font-[700] text-[#000] font-sans">01967519057</span>
            </span>
          </div>
          <span className="mx-5 w-[1px] h-[20px] bg-[#ccc]"></span>
          <div className=" flex">
            {" "}
            {/* //WishListContainer */}
            <span className="px-2 flex  flex-col items-center justify-center">
              <UserAddOutlined className="text-[32px] text-[#000]" />
              <small className="text-[13px]">Wishlist</small>
            </span>
            <span className="px-2 flex  flex-col items-center justify-center">
              <UserAddOutlined className="text-[32px] text-[#000]" />
              <small className="text-[13px]">Wishlist</small>
            </span>
            <span className="px-2 flex  flex-col items-center justify-center">
              <UserAddOutlined className="text-[32px] text-[#000]" />
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
              <span>
                {" "}
                <UserAddOutlined />
              </span>

              <span className="p-2 text-[11px] text-[#000] font-bold">
                Sign In
              </span>
              <span className="text-[11px] font-bold mx-2">/</span>
              <span className="text-[11px] font-bold"> Register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
