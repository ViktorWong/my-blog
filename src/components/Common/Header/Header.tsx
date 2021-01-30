/*
Author: Viktor (victor318x@gmail.com)
Header.tsx (c) 2021
Desc: description
Created:  1/30/2021, 2:38:52 PM
Modified: 2021/1/30 下午8:45:52
*/

import React from "react";
// import { useLocalStore, useObserver } from "mobx-react";
import { Link } from 'react-router-dom';
import routePath from "@constants/routePath";
import classNames from "classnames";

const headerList = {
  '首页': {
    url: routePath.home,
  },
  '知识': {
    url: routePath.notFound,
  },
  '关于': {
    url: routePath.notFound,
  },
};

const Header: React.FC<{}> = () => {
  return (
    <header
      className={classNames("no-user-select",'flex','bg-yellow-500','text-white')}
    >
         <Link to={routePath.home} className={classNames('')}>
          ViktorHub
        </Link>
        <nav className="flex-1">
          <ul className={classNames('flex','space-x-4','justify-around')} >
            {Object.keys(headerList).map(key => (
              <li  key={key}>
                <Link
                  to={{
                    pathname: headerList[key].url,
                    search: '',
                  }}
                >
                  <span className={classNames('flex-1')}>{key}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  );
};

export default Header;
