import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";

export default function AdminTemplate() {
  return (
    <div className=" ">
      <div className="row bg-dark">
        <div className="col-lg-2">
          <AdminNavbar />
        </div>

        <div className="col-lg-10 mt-5 py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
