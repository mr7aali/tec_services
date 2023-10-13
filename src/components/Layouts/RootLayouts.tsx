import Footer from "../sheared/Footer";
import HeaderCom from "../sheared/HeaderCom";

const RootLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderCom/>
      {children}
      <Footer/>
    </div>
  );
};

export default RootLayouts;
