import React, { useContext, useState } from "react";
import "../../style/addTeacher.css";
import axios from "axios";
import { BaseUrl } from "../../constant";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function AddProfileDetails() {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: "",
    state: "",
    pin: "",
    gender: "",
    dob: "",
    password: "",
  });
  const [profileImage, setProfileimage] = useState("");

  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("gender", data.gender);
      formData.append("dob", data.dob);
      formData.append("password", data.password);
      formData.append("address[state]", data.state);
      formData.append("address[pin]", data.pin);
      formData.append("address[fullAddress]", data.address);
      formData.append("image", profileImage);

      const res = await axios.post(`${BaseUrl}/admin/addteacher`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("ss", res.data);
      setData({
        name: "",
        email: "",
        phone: "",
        address: "",
        state: "",
        pin: "",
        gender: "",
        dob: "",
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

      <div class="container  bg-secondary">
        <form onSubmit={HandleSubmit}>
          <div class="row jumbotron box8 p-5 g-4">
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
              <label className="text-dark" for="name-l">
                Image
              </label>
              <input
                type="file"
                class="form-control"
                name="profileimage"
                id="name-l"
                placeholder="Enter your last name."
                onChange={(e) => setProfileimage(e.target.files[0])}
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
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="address-1">
                Address Line
              </label>
              <textarea
                type="address"
                class="form-control"
                name="address"
                value={data.address}
                id="address-1"
                placeholder="Locality/House/Street no."
                onChange={HandleOnchange}
                required
              />
            </div>
            {/* <div class="col-sm-6 form-group">
              <label className="text-dark" for="address-2">Address Line-2</label>
              <input
                type="address"
                class="form-control"
                name="address"
                id="address-2"
                placeholder="Village/City Name."
                required
              />
            </div> */}
            <div class="col-sm-4 form-group">
              <label className="text-dark" for="State">
                State
              </label>
              <input
                type="address"
                class="form-control"
                name="state"
                value={data.state}
                id="State"
                placeholder="Enter your state name."
                onChange={HandleOnchange}
                required
              />
            </div>
            <div class="col-sm-2 form-group">
              <label className="text-dark" for="zip">
                Pin-Code
              </label>
              <input
                type="zip"
                class="form-control"
                name="pin"
                value={data.pin}
                id="zip"
                placeholder="Pin-Code."
                onChange={HandleOnchange}
                required
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="Date">
                Date Of Birth
              </label>
              <input
                type="Date"
                name="dob"
                value={data.dob}
                class="form-control"
                id="Date"
                placeholder=""
                onChange={HandleOnchange}
                required
              />
            </div>
            <div class="col-sm-3 form-group">
              <label className="text-dark" for="sex">
                Gender
              </label>
              <select
                id="sex"
                class="form-control browser-default custom-select"
                name="gender"
                value={data.gender}
                onChange={HandleOnchange}
              >
                <option value="" selected>
                  select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unspesified">Unspecified</option>
              </select>
            </div>
            <div class="col-sm-3 form-group">
              <label className="text-dark" for="jd">
                Joining Date{" "}
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
            {/* <div class="col-sm-6 form-group">
              <label className="text-dark" for="pass2">Confirm Password</label>
              <input
                type="Password"
                name="cnf-password"
                class="form-control"
                id="pass2"
                placeholder="Re-enter your password."
                required
              />
            </div> */}
            {/* <div class="col-sm-12">
              <input
                type="checkbox"
                class="form-check d-inline"
                id="chb"
                required
              />
              <label className="text-dark" for="chb" class="form-check-label">
                &nbsp;I accept all terms and conditions.
              </label>
            </div> */}

            <div class="col-sm-12 form-group mb-0">
              <button class="btn btn-primary float-right">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProfileDetails;
