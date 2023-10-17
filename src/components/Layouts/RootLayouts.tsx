import Footer from "../sheared/Footer";
import HeaderCom from "../sheared/HeaderCom";
import TemporaryDrawer from "../ui/TemporaryDrawer";

const RootLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderCom/>
      {children}
      <TemporaryDrawer/>
      <Footer/>
    </div>
  );
};

export default RootLayouts;
