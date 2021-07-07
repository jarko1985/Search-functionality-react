import React from "react";
import "./sidebar.css";
import dashboard from "../../assets/dashboard2.svg";
import package2 from "../../assets/package.svg";

const Sidebar = () => {
  const handleToggle = () => {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
    if (btn.classList.contains("bx-menu")) {
      btn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };
  return (
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <i className="bx bxl-c-plus-plus"></i>
          <div className="logo_name">CodingLab</div>
        </div>
        <i onClick={handleToggle} className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav_list">
        <li>
          <a href="#3">
            <img className="icon" src={dashboard} alt="dashboard" />
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#3">
            <img className="icon" src={package2} alt="dashboard" />
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#3">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#3">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#3">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <a href="#3">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="#6">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <a href="#6">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
