import { ShoppingCartOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const AddToCartButton= ({count}:{count:number}) => (
  <>
    <FloatButton
      badge={{ count, overflowCount: 999 }}
      shape="square"
      style={{
        height: "60px",
        width: "60px",
        right: 60,
        bottom: 60,
      }}
      icon={
        <ShoppingCartOutlined
          style={{
            color: "#08c",
            fontSize: 40,
            top: 15,
            right: 14,
            position: "absolute",
          }}
        />
      }
    />
  </>
);

export default AddToCartButton;
