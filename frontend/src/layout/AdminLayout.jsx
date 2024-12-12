import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../modules/admin/SideBar";
import { AuthContext } from "../context/AuthContext";

function AdminLayout() {
  const { user } = useContext(AuthContext);
  if (user&&user.role !== "admin") return <Navigate to="/" />;

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
        <div className=" w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
