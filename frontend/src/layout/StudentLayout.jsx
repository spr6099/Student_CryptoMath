import React, { useContext } from "react";
import SideBar from "../modules/student/SideBar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function StudentLayout() {
  const { user } = useContext(AuthContext);
  if (user && user.role !== "student") return <Navigate to="/" replace />;

  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentLayout;
