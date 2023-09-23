import React from "react";
import { Outlet } from "react-router-dom";
import { Space } from 'antd'
import "./admin.css";
import CheckAdmin from "./components/CheckAdmin";
import AdminFooter from "./components/AdminFooter";
import SideMenu from "./components/SideMenu";
import AdminHeader from "./components/AdminHeader";
import PageContent from "./components/PageContent";
import AdminNavbar from "./components/AdminNavbar";

export default function AdminTemplate() {
  return (
    <div className="Admin">
      <CheckAdmin />

      <div className="d-none d-md-block">
        <AdminHeader />
      </div>
      <div className="d-md-none">
        <AdminNavbar />
      </div>

      <div className="SideMenuAndPageContent d-md-flex">

        <div className="d-none d-md-block">
          <SideMenu />
        </div>

        <PageContent />
      </div>
      <AdminFooter />
    </div>
  );
}
