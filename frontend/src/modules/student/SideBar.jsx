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
              <Link className="sidebar-link">
                <MdOutlineDashboard /> <span>DashBoard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to={`/student/games`} className="sidebar-link">
                <HiOutlineUsers /> <span>games</span>
              </Link>
            </li>
            {/* <li className="sidebar-item">
              <a
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <HiOutlineUsers /> <span>Students</span>
              </a>
              <ul
                id="auth"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link className="sidebar-link">Add Teacher</Link>
                </li>
                <li className="sidebar-item">
                  <Link className="sidebar-link">All Teacher</Link>
                </li>
              </ul>
            </li> */}
            {/* <li className="sidebar-item">
              <a
                //
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#student"
                aria-expanded="false"
                aria-controls="student"
              >
                <i className="lni lni-protection"></i>
                <span>Student</span>
              </a>
              <ul
                id="student"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link className="sidebar-link">All Student</Link>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link">xxxxx</a>
                </li>
              </ul>
            </li> */}
            {/* <li className="sidebar-item">
              <a
            
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#multi"
                aria-expanded="false"
                aria-controls="multi"
              >
                <i className="lni lni-layout"></i>
                <span>Multi Level</span>
              </a>
              <ul
                id="multi"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <a
                
                    className="sidebar-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#multi-two"
                    aria-expanded="false"
                    aria-controls="multi-two"
                  >
                    Two Links
                  </a>
                  <ul
                    id="multi-two"
                    className="sidebar-dropdown list-unstyled collapse"
                  >
                    <li className="sidebar-item">
                      <a className="sidebar-link">
                        Link 1
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a className="sidebar-link">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* <li className="sidebar-item">
              <a className="sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Notification</span>
              </a>
            </li> */}
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
