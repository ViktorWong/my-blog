import React from "react";
import { Router } from "react-router-dom";
import { useLocalStore, useObserver } from "mobx-react";
import classnames from "classnames";
// import { ToastContainer } from "react-toastify";
// import { checkWebp, devToolsWarning } from "@utils/utils";
import history from "@routers/history";
import stores from "@stores/index";
import Routers from '@routers/Routers';

import Header from "@components/Common/Header";
import Footer from "@components/Common/Footer";
// import AutoBackToTop from '@components/Common/AutoBackToTop';
// import ScrollToTop from '@components/Widget/ScrollToTop';

// import { ILayoutsProps } from "@/types/layout";

// import "@assets/styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

const Layouts: React.FC<{}> = () => {
  const localStore = useLocalStore(() => stores.layoutsStore);
  const isGray = localStore!.globalStatus.full_site_gray;

  return useObserver(() => (
    <div
      className={classnames("custom-layouts-wrapper", {
        "full-site-gray": isGray,
      })}
    >
      <Router history={history}>
        {/* <AutoBackToTop> */}
        <Header />
        <div style={{ minHeight: "100vh" }}>
          <Routers />
        </div>
        {/* <ScrollToTop /> */}
        <Footer />
        {/* <ToastContainer /> */}
        {/* </AutoBackToTop> */}
      </Router>
    </div>
  ));
};

export default Layouts;

// import Routers from '../Routers';

// @inject('layoutsStore')
// @observer
// class Layouts extends Component<ILayoutsProps, {}> {
//   constructor(props: ILayoutsProps) {
//     super(props);
//     this.state = {};
//   }

//   // 页面初始化监听
//   public componentWillMount() {
//     window.localStorage.setItem('isWebp', checkWebp().toString());
//     this.reactGA();
//     devToolsWarning();
//   }

//   public componentDidMount() {
//     const { layoutsStore } = this.props;
//     layoutsStore!.getPlayers();
//     layoutsStore!.getGlobalStatus();
//   }

//   public render() {
//     const { layoutsStore } = this.props;
//     const isGray = layoutsStore!.globalStatus.full_site_gray;

//     return (
//       <div className={classnames(isGray && 'full_site_gray', 'content')}>
//         <Router history={history}>
//           <AutoBackToTop>
//             <Header />
//             <div style={{ minHeight: '100vh' }}>
//               <Routers />
//             </div>
//             <ScrollToTop />
//             <Player />
//             <Footer />
//             <ToastContainer />
//           </AutoBackToTop>
//         </Router>
//       </div>
//     );
//   }
// }

// export default Layouts;
