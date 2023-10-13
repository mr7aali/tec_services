import { UserAddOutlined } from "@ant-design/icons";

const HeaderCom = () => {
  return (
    <>
      <HeaderTop />
      <div></div>
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
