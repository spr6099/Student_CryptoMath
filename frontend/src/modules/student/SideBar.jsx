import React, { useState } from "react";
import "../../style/adminSidebar.css";
import { Md10K, MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
function SideBar() {
  const [isExpanded, setExpanded] = useState(true);
  const HandleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <div className="sidebar_wrapper">
        <aside id="sidebar" className={isExpanded ? "expand" : ""}>
          <div className="d-flex">
            <button className="toggle-btn" onClick={HandleToggle} type="button">
              <MdOutlineMenu className="text-light" />{" "}
            </button>
            <div className="sidebar-logo">
              <span className="text-light fs-5">Student</span>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <Link to={"/student/home"} className="sidebar-link">
                <MdOutlineDashboard /> <span>DashBoard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to={"/student/marklist"} className="sidebar-link">
                <MdOutlineDashboard /> <span>MarkList</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to={`/student/games`} className="sidebar-link">
                <HiOutlineUsers /> <span>games</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link">
                <CgProfile /> <span>Profile</span>
              </Link>
            </li>
          </ul>
          <div className="sidebar-footer">
            <a className="sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SideBar;
