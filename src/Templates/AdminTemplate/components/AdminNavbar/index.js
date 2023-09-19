import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import './admin-navbar.css'

export default function AdminNavbar(props) {
  useEffect(() => {
    window.scrollTo(1, 0);
  });

  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));


  if (!userData) {
    return navigate(`/`, { replace: true });
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("USER_LOGIN");
      return navigate(`/`, { replace: true });
    }
  }

  return (
    <div className='adminNavbar__Container align-items-center navbar-expand-lg'>
      <nav className="navbar">
        <div className="">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContentAdmin"
            aria-controls="navbarSupportedContentAdmin"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
            </span>
          </button>

          <Link className="nav-link navbar-brand d-flex align-items-center" to="/">
            <img
              width="30px"
              className="item-link"
              src="https://cdn-icons-png.flaticon.com/512/2111/2111254.png"
              alt=""
            />
            <div className='main__Title ml-2'>
              AirBnb
            </div>
          </Link>
        </div>
      </nav>

      <div id='navbarSupportedContentAdmin' className="collapse navbar-collapse">
        <ul className="container text-center justify-content-around text-white">
          <Link className='nav-link' to="/admin/manage-room">
            <p className="nav-item">Rooms Management</p>
          </Link>

          <Link className='nav-link'>
            <p className="nav-item">Customers Management</p>
          </Link>

          <Link className='nav-link'>
            <p className="nav-item">Location Management</p>
          </Link>

          <Link className='nav-link'>
            <p className="nav-item">Comments Management</p>
          </Link>

          <li className="nav-link">
            <button onClick={handleLogout} className='btn btn-warning '>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
