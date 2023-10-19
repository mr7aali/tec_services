import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Image from "next/image";
import { IService } from "@/interface/type";
import AddToCartButton from "./FloatButton";
import { TotalPrice } from "./utils/utils";

export default function SideDrawer({
  DrawerData,
  setDrawerData,
}: {
  DrawerData: IService[];
  setDrawerData: any;
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type Anchor = "top" | "left" | "bottom" | "right";
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  
  const subTotal = TotalPrice(DrawerData);
  const Delivary_Charge = 60;
  const removeFromCart = (data: IService) => {
    const filterData = DrawerData.filter(
      (s) => s.service_id !== data.service_id
    );
    setDrawerData(filterData);
  };

  return (
    <>
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <span onClick={toggleDrawer(anchor, true)}>
            <AddToCartButton count={Number(DrawerData.length)} />
          </span>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <p className="text-[#000] mt-6 ml-5 text-[25px]">Shopping Bag</p>

            {DrawerData?.map((service: IService, i: number) => (
              <div key={service.service_id} className="w-[350px] mt-2">
                <div
                  style={{ borderTop: "1px solid black" }}
                  className="p-3 m-2 flex items-center"
                >
                  <div
                    style={{ border: "1px solid red" }}
                    onClick={() => removeFromCart(service)}
                    className="m-0 text-red-500 font-bold cursor-pointer"
                  >
                    X
                  </div>
                  <div className="h-[40px] w-[60px] bg-black ml-3">
                    <Image
                      src="https://images.othoba.com/images/thumbs/0194842.png"
                      alt=""
                      // layout="responsive"
                      width={100}
                      height={50}
                    />
                  </div>
                  <div className="w-[150px] ml-2">
                    <span className="overflow-hidden text-[15px] font-bold">
                      {service.service_name}
                    </span>
                    <p className="text-[#000] text-[13px]">
                      {" "}
                      {service.availability}{" "}
                    </p>
                  </div>
                  <div className="ml-1 font-semibold">
                    {" "}
                    $ {service.price}
                    <div></div> <span className="flex justify-end">X 1</span>{" "}
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full mt-12">
              <div className="bg-[#f7dcdc] p-3 text-xl mx-3">
                <p className="text-center font-bold">Cart Totals</p>
              </div>
              <div className="flex px-5 mt-2 justify-between">
                <p className="font-medium">Sub Totals</p>
                <p className="font-medium">${subTotal}</p>
              </div>
              <div className="flex px-5 mt-2 justify-between">
                <p className="font-medium">Delivary Charge</p>
                <p className="font-medium">$ {Delivary_Charge}</p>
              </div>
              <div className="flex px-5 mt-2 justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">${subTotal + Delivary_Charge}</p>
              </div>
              {/* <div style={{border:"1px solid red"}} className="cursor-pointer bg-[#13AFF0] mt-5 p-3 text-lg mx-3">
                <p className="text-center text-[#fff] ">
                 
                </p>
              </div> */}
              <div className="cursor-pointer bg-[#1 3AFF0] mt-5 p-3 text-lg mx-3">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ padding: "12px 0px" }}
                >
                  {" "}
                  Proceed To Booking
                </Button>
              </div>
            </div>

            <div className="w-[350px] ">
              <h1 className="flex items-center flex-col  mt-96 text-xl text-[#000]">
                <p>ICON</p>
                <p className="text-xl mt-3">Empty</p>
              </h1>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}
