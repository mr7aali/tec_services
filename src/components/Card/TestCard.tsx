import Link from "next/link";
import React, { useContext } from "react";

const TestCard = () => {
  return (
    <React.Fragment>
      <div className=" page-wrapper ">
        <div className="page-inner">
          <div className="row ">

            <div className="el-wrapper shadow-lg relative">
              <div style={{border:"1px solid red"}} className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <Link  href={"/"} className="cart">
                  <span className="price">$ resalePrice</span>
                  <span  className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TestCard;
