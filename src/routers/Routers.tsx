import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Loading from '@components/Common/Loading';
import routePath from '@constants/routePath';

const Home = lazy(() => import('@pages/Home'));

const Routers:React.FC<{}> = () => {
  return (
    <Suspense fallback={<Loading />}>
       <Switch>
          <Route path={routePath.home} exact render={() => <Home />} />
          <Route render={() => <NotFound />} />
          </Switch>
      </Suspense>
  )
} 

export default Routers;
