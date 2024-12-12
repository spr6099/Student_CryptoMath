import React, { useState } from "react";
import "../../style/addTeacher.css";
import axios from "axios";
import { BaseUrl } from "../../constant";
import { toast } from "react-toastify";
function AddTeacher() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    joindate: "",
    password: "",
  });

  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BaseUrl}/admin/addteacher`, data);
      console.log("ss", res.data);
      setData({
        name: "",
        email: "",
        phone: "",
        joindate: "",
        password: "",
      });
      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
  };

  return (
    <div className="p-4">
      {/* <h2 class="text-center text-info">Register</h2> */}

      <div class="container  ">
        <form onSubmit={HandleSubmit}>
          <div class="row jumbotron box8 p-5 g-4 bg-secondary">
            <div class="col-sm-12 mx-t3 mb-4 ">
              <h2 class="text-center text-dark">Register</h2>
            </div>
            <div class="col-sm-6 form-group ">
              <label className="text-dark" for="name-f">
                {" "}
                Name
              </label>
              <input
                type="text"
                class="form-control  border-2 border-secondary"
                name="name"
                id="name-f"
                value={data.name}
                placeholder="Enter your first name."
                onChange={HandleOnchange}
                required
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="email">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={data.email}
                id="email"
                placeholder="Enter your email."
                onChange={HandleOnchange}
                required
              />
            </div>

            <div class="col-sm-3 form-group">
              <label className="text-dark" for="jd">
                Joining Date
              </label>
              <input
                type="Date"
                name="joindate"
                value={data.joindate}
                class="form-control"
                id="jd"
                placeholder=""
                onChange={HandleOnchange}
                required
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="tel">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={data.phone}
                class="form-control"
                id="tel"
                placeholder="Enter Contact Number."
                onChange={HandleOnchange}
                required
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="pass">
                Password
              </label>
              <input
                type="Password"
                name="password"
                value={data.password}
                class="form-control"
                id="pass"
                placeholder=" password."
                onChange={HandleOnchange}
                required
              />
            </div>

            <div class="col-sm-12 form-group mb-0">
              <button class="btn btn-primary float-right">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher;
