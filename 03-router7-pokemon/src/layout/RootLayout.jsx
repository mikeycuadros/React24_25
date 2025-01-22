import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
