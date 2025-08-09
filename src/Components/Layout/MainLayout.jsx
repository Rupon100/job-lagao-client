import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
