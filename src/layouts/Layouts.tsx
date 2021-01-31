import React from "react";
import { Router } from "react-router-dom";
import { useLocalObservable, Observer } from "mobx-react";
import classnames from "classnames";
// import { ToastContainer } from "react-toastify";
// import { checkWebp, devToolsWarning } from "@utils/utils";
import history from "@routers/history";
import stores from "@stores/index";
import Routers from "@routers/Routers";

import Header from "@components/Common/Header";
import Footer from "@components/Common/Footer";
import AutoBackToTop from "@components/Common/AutoBackToTop";
// import ScrollToTop from '@components/Widget/ScrollToTop';

// import { ILayoutsProps } from "@/types/layout";

// import "@assets/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

const Layouts: React.FC<{}> = () => {
  const localStore = useLocalObservable(() => stores.layoutsStore);
  const isGray = localStore!.globalStatus.full_site_gray;

  return (
    <Observer>
      {() => (
        <div
          className={classnames("custom-layouts-wrapper", {
            "full-site-gray": isGray,
          })}
        >
          <Router history={history}>
            <AutoBackToTop>
              <Header />
              <main>
                <Routers />
              </main>
              {/* <ScrollToTop /> */}
              <Footer />
              {/* <ToastContainer /> */}
            </AutoBackToTop>
          </Router>
        </div>
      )}
    </Observer>
  );
};

export default Layouts;
