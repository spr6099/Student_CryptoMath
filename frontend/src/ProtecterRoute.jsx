import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Route, useNavigate } from "react-router-dom";

function ProtecterRoute({ roles, children }) {
  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  // if (user?.role !== "parent") return <Navigate to="/" replace />;

  return <>{children}</>;
}

export default ProtecterRoute;
