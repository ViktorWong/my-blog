/*
Author: Viktor (victor318x@gmail.com)
Loading.ts (c) 2021
Desc: description
Created:  1/30/2021, 1:33:52 PM
Modified: 2021/1/30 下午4:43:48
*/

import React from "react";

const styles = {
  position: "fixed" as "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: "auto",
  textAlign: "center" as "center",
  color: "#000000",
  width: "96px",
  height: "96px",
  background:
    'url("https://img.zcool.cn/community/01c6ac56cfb2026ac7252ce6660711.gif") 50% 50% no-repeat',
  backgroundSize: "100%",
};

const Loading: React.FC<{}> = () => {
  return <figure style={styles} />;
};

export default Loading;
