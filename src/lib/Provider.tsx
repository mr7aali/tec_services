import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
     
    </div>
  );
};

export default Providers;
