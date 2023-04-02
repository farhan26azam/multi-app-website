import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";

import { Link, Outlet } from "react-router-dom";
import NavbarObject from "../pages/NavbarObject";
import Sidebar from "../pages/Sidebar";
function Navbar() {
  return (
    <div>
      <NavbarObject />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Navbar;
