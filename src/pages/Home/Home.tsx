/*
Author: Viktor (victor318x@gmail.com)
Home.tsx (c) 2021
Desc: description
Created:  1/30/2021, 4:59:44 PM
Modified: 2021/1/31 上午11:36:18
*/

import React from "react";

const Home: React.FC<{}> = () => {
  return (
    <div className="flex h-screen">
      <section className="w-1/3 bg-yellow-500 p-16 absolute left-0 h-screen z-0"></section>
      <section className="w-2/3 bg-black p-16 absolute right-0 h-screen z-0"></section>
      <main className="absolute left-0 top-0 w-screen h-screen flex items-center justify-center">
        <div className="max-w-screen-md max-h-1/2 flex items-center">
          <div >
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1730713693,2130926401&fm=26&gp=0.jpg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex-1 ml-10">
            <h1 className="text-10xl text-gray-dark font-bold relative">
                102
                <span className="text-6xl absolute  text-white  inset-0 top-1/2  transform  whitespace-nowrap">撞见风格</span>
            </h1>
            
            <p className="text-white text-xs">
              风格的形成是潜移默化的过程，风格的形成是潜移默化的过程，风格的形成是潜移默化的过程，风格的形成是潜移默化的过程，风格的形成是潜移默化的过程，风格的形成是潜移默化的过程，
            </p>
            <button className="text-white text-tiny mt-8">查看更多&gt;</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
