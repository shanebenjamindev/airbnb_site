import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './admin-navbar.css';
import { UserOutlined } from "@ant-design/icons";

export default function AdminNavbar(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));

  if (!userData) {
    navigate(`/`, { replace: true });
    return null;
  }
  else {
    var { user } = userData
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("USER_LOGIN");
      navigate(`/`, { replace: true });
    }
  };

  return (
    <nav className="bg-white admin__Navbar navbar navbar-expand-lg navbar-light fixed-top">
      <Link className="navbar-brand d-flex justify-content-center align-items-center" to="/admin/dashboard">
        <img
          width="30px"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111254.png"
          alt=""
        />
        <div className="main__Title ml-2">AirBnb</div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContentAdmin"
        aria-controls="navbarSupportedContentAdmin"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse text-center "
        id="navbarSupportedContentAdmin"
      >
        <ul className="navbar-nav d-flex align-items-center ml-auto">
          <li className="nav-link">
            <Link className="" to="/admin/manage-rooms">
              Rooms
            </Link>
          </li>
          <li className="nav-link">
            <Link className="" to="/admin/manage-customers">
              Customers
            </Link>
          </li>
          <li className="nav-link">
            <Link className="" to="/admin/manage-locations">
              Location
            </Link>
          </li>
          <li className="nav-link">
            <Link className="" to="/admin/manage-comments">
              Comments
            </Link>
          </li>
          <li className="nav-link">
            <Link className="" to="/admin/manage-rooms">
              <img width="40" height="40" alt="" src={(user.length === 0) ? (user.avatar) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
            </Link>
          </li>
          <li className="nav-link">
            <button
              onClick={handleLogout}
              className="btn__Primary  m-auto"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
