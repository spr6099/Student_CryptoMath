import React, { useState } from "react";
import "../../style/adminSidebar.css";
import {
  Md10K,
  MdOutlineDashboard,
  MdOutlineMenu,
  MdPersonAddAlt1,
  MdOutlineNotifications,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { RiParentLine } from "react-icons/ri";
import { TbUsersGroup } from "react-icons/tb";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";

function SideBar() {
  const [isExpanded, setExpanded] = useState(true);
  const HandleToggle = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="p-0 m-0" >
      <div className="sidebar_wrapper">
        <aside id="sidebar" className={isExpanded ? "expand" : ""}>
          <div className="d-flex">
            <button className="toggle-btn" onClick={HandleToggle} type="button">
              <MdOutlineMenu className="text-light" />{" "}
            </button>
            <div className="sidebar-logo">
              <span className="text-light fs-5">Admin</span>
            </div>
          </div>
          <ul className="sidebar-nav text-light ">
            <li className="sidebar-item">
              <Link to={"/admin/home"} className="sidebar-link ">
                <MdOutlineDashboard className="sidebar_icon" />{" "}
                <span>DashBoard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to={"/admin/studentslist"} className="sidebar-link">
                <TbUsersGroup className="sidebar_icon" />
                {/* <HiOutlineUsers className="sidebar_icon" />{" "} */}
                <span>Students</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link to={"/admin/parentslist"} className="sidebar-link">
                <RiParentLine className="sidebar_icon" />
                <span>Parent</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <PiChalkboardTeacherBold className="sidebar_icon" />
                <span>Teacher</span>
              </a>
              <ul
                id="auth"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link to={"/admin/AddTeacher"} className="sidebar-link">
                    <MdPersonAddAlt1 className="sidebar_icon" />
                    Add Teacher
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to={"/admin/teacherslist"} className="sidebar-link">
                    <FaRegAddressCard className="sidebar_icon" />
                    All Teacher
                  </Link>
                </li>
              </ul>
            </li>

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
            <li className="sidebar-item">
              <a className="sidebar-link">
                <MdOutlineNotifications className="sidebar_icon" />
                <span>Notification</span>
              </a>
            </li>
            {/* <li className="sidebar-item">
              <a className="sidebar-link">
                <CgProfile />
                <span>Profile</span>
              </a>
            </li> */}
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
