/*
Author: Viktor (victor318x@gmail.com)
Header.tsx (c) 2021
Desc: description
Created:  1/30/2021, 2:38:52 PM
Modified: 2021/1/30 下午11:41:08
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
  '博客': {
    url: routePath.blog,
  },
  '存档': {
    url: routePath.archive,
  },
  '关于我': {
    url: routePath.about
  }
};

const Header: React.FC<{}> = () => {
  return (
    <header
      className={classNames("no-user-select",'flex','text-white','fixed','top-0','w-screen','p-6','z-50')}
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
                    pathname: headerList[key].url
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
