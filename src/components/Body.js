//import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useContext } from "react";
import { dartModeFlag } from "../utils/useContexts";
//import React from "react"
const Body = () => {
  const { modeFlag, setModeflag } = useContext(dartModeFlag);
  console.log(modeFlag);

  let classValue;
  modeFlag == true ? (classValue = "bg-[#0f0f0f]  flex z-0") : (classValue = "");
  return (
    <>
      <div className={`${classValue}flex pt-24 m-0 `}>
        <Sidebar />
        {/*here we want dynamic routing as either we want maincontainer or watchpage so use outlet chilldren go to the outlet */}
        <Outlet />
      </div>
    </>
  );
};
export default Body;
