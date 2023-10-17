import { ShoppingCartOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

const FloatButtonT: React.FC = () => (
  <>
    <FloatButton
      badge={{ count: 6, overflowCount: 999 }}
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

export default FloatButtonT;
