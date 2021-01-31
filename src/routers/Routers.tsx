import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "@pages/NotFound";
import Loading from "@components/Common/Loading";
import routePath from "@constants/routePath";

const Home = lazy(() => import("@pages/Home"));
const Blog = lazy(() => import("@pages/Blog"));
const Archive = lazy(() => import("@pages/Archive"));
const About = lazy(() => import("@pages/About"));

const Routers: React.FC<{}> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={routePath.home} exact render={() => <Home />} />
        <Route path={routePath.blog} render={() => <Blog />} />
        <Route path={routePath.archive} render={() => <Archive />} />
        <Route path={routePath.about} render={() => <About />} />
        <Route path={routePath.notFound} render={() => <NotFound />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </Suspense>
  );
};

export default Routers;
