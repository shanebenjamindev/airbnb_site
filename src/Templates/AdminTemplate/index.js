import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";

export default function AdminTemplate() {
  return (
    <div className="container-fluid bg-dark ">
      <div className="row">
        <div className="col-lg-3">
          <AdminNavbar />
        </div>

        <div className="col-lg-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
