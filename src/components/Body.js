import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className=" flex mt-20   flex-col md:flex-row">
         <Sidebar className="w-full md:w-1/4 h-20 md:h-screen text-sm md:text-lg" />
         <Outlet className="w-full md:w-3/4 h-auto md:h-screen text-sm md:text-lg" />
    </div>
  );
};

export default Body;
