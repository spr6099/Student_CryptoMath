import React, { useContext } from "react";
import SideBar from "../modules/teacher/SideBar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function TeacherLayout() {
  const { user } = useContext(AuthContext);
  if (user&&user.role !== "teacher") return <Navigate to="/" replace />;

  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
}

export default TeacherLayout;
