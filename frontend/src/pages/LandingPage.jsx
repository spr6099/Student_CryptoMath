import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LandingPage() {
  const context = useContext(AuthContext);
  console.log("j",context.user);
  
  return <div>LandingPage</div>;
}

export default LandingPage;
