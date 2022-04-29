
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import JsMainComp from "../../components/JsMainComp";
import { Scrollbars } from "react-custom-scrollbars-2";


function JsHome() {
  return (
    <>
      <div className="flex flex-col h-screen">
      <div className="flex-1 ">
        <div className="flex flex-row">
          <div className="hidden lg:block lg:w-1/4 h-screen sticky top-0">
            <Scrollbars>
              <SideNav />
            </Scrollbars>
          </div>
          <div className="w-full lg:w-3/4 dark:bg-gray-700">
            <JsMainComp />
          </div>
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default JsHome;
