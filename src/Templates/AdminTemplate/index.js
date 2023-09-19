import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";

export default function AdminTemplate() {
  return (
    <div>
          <Outlet />
    </div>
  );
}
