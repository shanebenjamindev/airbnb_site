import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './admin-navbar.css';

export default function AdminNavbar(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const user = userData?.user;

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
        className="collapse navbar-collapse text-center"
        id="navbarSupportedContentAdmin"
      >
        <div className=" overlay-hidden"
          data-toggle="collapse"
          data-target="#navbarSupportedContentAdmin"
          aria-controls="navbarSupportedContentAdmin"
          aria-expanded="false"
          aria-label="Toggle navigation" >
        </div>

        <ul className="navbar-nav ml-auto main__p">
          <li className="nav-item">
            <Link className="nav-link d-flex flex-column align-items-center justify-content-center" to={`/admin/admin-info/${user.id}`}>
              <img width="40" height="40" alt="" src={(user.avatar) || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
              <span className="">{`${(user.name)}'s profile`}</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-rooms">
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-locations">
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage-comments">
              Comments
            </Link>
          </li>
          <li className="nav-item">
            <button
              onClick={handleLogout}
              className="btn btn-danger my-2"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
