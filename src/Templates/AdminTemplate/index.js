import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import "./admin.css";

export default function AdminTemplate() {
  return (
    <div className="">
      <AdminNavbar />
      <div className="admin__Section">
        <Outlet />
      </div>
    </div>
  );
}
