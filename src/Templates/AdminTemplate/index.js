import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Space } from 'antd'
import "./admin.css";
import CheckAdmin from "./components/CheckAdmin";
import AdminFooter from "./components/AdminFooter";
import SideMenu from "./components/SideMenu";
import AdminHeader from "./components/AdminHeader";
import PageContent from "./components/PageContent";
import AdminNavbar from "./components/AdminNavbar";
import { useCheckRole } from "../../hooks/useCheckRole";

export default function AdminTemplate() {
  const user = useCheckRole()

  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true })
      alert("Hãy đăng nhập trước")
    }
    else navigate('/admin/dashboard')
  }, [])

  const renderAdmin = () => {
    return <>
      <div className="d-none d-md-block">
        <AdminHeader />
      </div>
      <div className="d-md-none">
        <AdminNavbar />
      </div>

      <div className="SideMenuAndPageContent d-md-flex">

        <div className="d-none d-md-block col-md-2">
          <SideMenu />
        </div>

        <div className="col-md-10">
          <PageContent />
        </div>
      </div>
      <AdminFooter />

    </>
  }

  return (
    <div className="Admin">
      {(user) && renderAdmin()}
    </div>
  );
}
