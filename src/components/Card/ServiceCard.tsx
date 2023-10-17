import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { IService } from "@/interface/type";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { dividerClasses } from "@mui/material";
import { isLoggedIn } from "@/service/auth.service";
import { NextRouter, useRouter } from "next/router";

const { confirm } = Modal;

const destroyAll = () => {
  Modal.destroyAll();
};

const ServiceCard = ({
  service,
  setDrawerData,
  DrawerData,
}: {
  service: IService;
  setDrawerData: any;
  DrawerData: IService[];
}) => {
  const router: NextRouter = useRouter();
  //{service}:{service:IService}
  const [isHovered, setIsHovered] = useState(false);
  const totalRating = service.Review.reduce(
    (sum, review) => sum + Number(review.rating),
    0
  );
  const total_review = service.Review.length;
  const rating = Number(totalRating / total_review) || 0;

  const AddToDrawer = (data: IService) => {
    const isLogin = isLoggedIn();

    if (!isLogin) {
      confirm({
        // icon: <ExclamationCircleOutlined />,
        content: (
          <Button style={{ font: "red" }}>You need to login first !</Button>
        ),
        onOk() {
          router.push("/auth/login");
          return 0;
        },
        onCancel() {
          // router.push("/auth/login");
          return 0;
        },
      });
    }
   

    
    if (DrawerData.includes(service)) {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button>You have already add This Service!</Button>,
      });
      return;
    }
    console.log("add");
    if (!DrawerData.includes(service) && isLogin) {
      console.log(DrawerData.includes(service), isLogin);
      const result = [...DrawerData, service];
      setDrawerData(result);
    }
  };

  return (
    <>
      <div className="relative">
        <motion.div
          style={{ border: "1px solid #e5e7eb" }}
          className="max-w-sm rounded overflow-hidden  shadow-lg relative"
        >
          <div className="flex justify-center items-center">
            <Image
              src="https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-500x500.webp"
              width={250}
              height={200}
              alt=""
            />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {" "}
              {service.service_name}
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              # {service.category}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex items-center justify-center">
                <p className="mr-1">{rating}</p>
                {/* <AiFillStar />  */}

                <StarFilled />
              </div>
            </span>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {service.price} $
            </span>
          </div>
          <span className="inline-block absolute top-5 right-0 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {service.availability}
          </span>
        </motion.div>

        <motion.div
          onClick={() => AddToDrawer(service)}
          className={`${
            isHovered
              ? "absolute top-0  w-full h-full backdrop-blur-md"
              : "absolute top-0  w-full h-full"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="page-wrapper">
            <div className="page-inner">
              <div className="row flex justify-center items-center">
                <div className="el-wrapper w-full shadow-lg  relative cursor-pointer">
                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner"></div>
                    </div>

                    <Link href={"/"} className="cart">
                      <span className="price">$ {service.price}</span>
                      <span className="add-to-cart">
                        <span className="txt">Add in cart</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceCard;
