import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtecterRoute({ role, children }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user === undefined) return; // wait until user is defined

    if (!user) {
      navigate("/login");
    } else if (user.role !== role) {
      navigate("/");
    }
  }, [user, role, navigate]);

//   if (!user || user.role !== role) {
//     return null;
//   }

  return <>{children}</>;
}

export default ProtecterRoute;
