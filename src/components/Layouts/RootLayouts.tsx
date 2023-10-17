import Footer from "../sheared/Footer";
import HeaderCom from "../sheared/HeaderCom";
import TemporaryDrawer from "../ui/SideDrawer";

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
