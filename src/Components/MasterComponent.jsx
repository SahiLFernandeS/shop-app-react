import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Toolbar } from "@mui/material";

export default function MasterComponent() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
}
