import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

export default function AdminNavbar(props) {
  useEffect(() => {
    window.scrollTo(1, 0);
  });

  return (
    <nav className="bg-dark d-none d-md-block sidebar">
    <div className="position-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  </nav>
  );
}
