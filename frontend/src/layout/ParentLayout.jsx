import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../modules/parent/SideBar";
import { AuthContext } from "../context/AuthContext";

function ParentLayout() {
  const { user } = useContext(AuthContext);
  if (user&&user.role !== "parent") return <Navigate to="/" replace />;

  return (
    <div>
      {/* <div className="row">
        <div className="col-3">
          
          <SideBar />
        </div>
        <div className="col-9">
         
          <Outlet />
        </div>
      </div> */}
      <div className="d-flex">
        <SideBar />
        <div className=" w-100 layout_overflow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ParentLayout;
