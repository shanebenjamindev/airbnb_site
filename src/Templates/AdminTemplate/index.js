import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import "./admin.css";
import CheckAdmin from "./components/CheckAdmin";

export default function AdminTemplate() {
  return (
    <div className="">
      <CheckAdmin />
      <AdminNavbar />
      <div className="admin__Section">
        <Outlet />
      </div>
    </div>
  );
}
