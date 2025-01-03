import React, { useState } from "react";
import "../style/login.css";
import girl from "../assets/login/girl.png";
import { BaseUrl } from "../constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ParentSignup() {
  const navigate = useNavigate();
  const [logData, setLogData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [conformPassword, setConformPassword] = useState("");

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (logData.password !== conformPassword) {
      return alert("password not match");
    }

    try {
      const res = await axios.post(`${BaseUrl}/auth/register`, logData);
      const result = res.data;
      console.log(logData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <section>
          <div class="leaves">
            <div class="set">
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
          </div>
          <img src="bg.jpg" class="bg" />
          <img src={girl} class="girl" />
          <img src="trees.png" class="trees" />
          <form class="login" onSubmit={HandleSubmit}>
            <h2>Parent Register</h2>

            <div class="inputBox">
              <input
                type="text"
                name="name"
                placeholder="Username"
                onChange={HandleChange}
                required
              />
            </div>
            <div class="inputBox">
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={HandleChange}
                required
              />
            </div>
            <div class="inputBox">
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                onChange={HandleChange}
                required
              />
            </div>
            <div class="inputBox">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={HandleChange}
                required
              />
            </div>
            <div class="inputBox">
              <input
                type="password"
                placeholder="Re-enter Password"
                onChange={(e) => setConformPassword(e.target.value)}
                required
              />
            </div>
            <div class="inputBox">
              <input type="submit" value="Signup" id="btn" />
            </div>
            <div class="group">
              <a href="#"></a>
              <a href="/login">Login</a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ParentSignup;
