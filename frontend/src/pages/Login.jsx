import React, { useContext, useState } from "react";
import "../style/login.css";
import girl from "../assets/login/girl.png";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../constant";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
function Login() {
  const navigate = useNavigate();

  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const context = useContext(AuthContext);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BaseUrl}/auth/login`, logData);
      const result = res?.data?.data;
      // console.log(result);
      context.setUser(result);
      sessionStorage.setItem("user", JSON.stringify(result));
      //
      if (result?.role === "admin") {
        navigate("/admin/home");
      } else if (result?.role === "parent") {
        navigate("/parent/home");
      } else if (result?.role === "teacher") {
        navigate("/teacher/home");
      } else if (
        result?.role === "student" &&
        result?.adminstatus === "approve"
      ) {
        navigate("/student/home");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div>
      <section className="loginSection">
        {/* <div className="leaves">
          <div className="set">
            <div>
              <img src="leaf_02.png" />
            </div>
            <div>
              <img src="leaf_03.png" />
            </div>
            <div>
              <img src="leaf_04.png" />
            </div>
            <div>
              <img src="leaf_01.png" />
            </div>
            <div>
              <img src="leaf_01.png" />
            </div>
            <div>
              <img src="leaf_02.png" />
            </div>
            <div>
              <img src="leaf_03.png" />
            </div>
            <div>
              <img src="leaf_04.png" />
            </div>
          </div>
        </div> */}
        {/* <img src="bg.jpg" className="bg" /> */}
        <img src={girl} className="girl" />
        {/* <img src="trees.png" className="trees" /> */}
        <form onSubmit={HandleSubmit} className="login">
          <h2>Sign In</h2>
          <div className="inputBox">
            <input
              type="email"
              placeholder="Username"
              name="email"
              onChange={HandleChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={HandleChange}
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="Login" id="btn" />
          </div>
          <div className="group">
            <a href="#"></a>
            <Link to="/parentSignup">Parent Signup</Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
