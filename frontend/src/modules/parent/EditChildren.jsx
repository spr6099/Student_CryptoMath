import React, { useContext, useEffect, useState } from "react";
import { MdTry } from "react-icons/md";
import { BaseUrl } from "../../constant";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";

function EditChildren() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profileimg, setProfileimg] = useState("");
  const [medical, setMedical] = useState([]);
  const [educational, setEducational] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    fullAddress: "",
    state: "",
    pin: "",
    dob: "",
    phone: "",
    // password: "",
    gender: "",
    about: "",
    relation: "",
  });

  //   const [student, setstudent] = useState({});

  const getStudent = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/parent/getonechild/${id}`);
      const result = res.data.data;
      const {
        name,
        email,
        address = {},
        medical = [],
        educational = [],
        dob,
        phone,
        gender,
        about,
        relation,
        profileimage,
      } = result;
      const { fullAddress, pin, state } = address;
      setData({
        name,
        email,
        dob,
        phone,
        gender,
        about,
        relation,
        fullAddress,
        pin,
        state,
      });
      setProfileimg(profileimage);
      setMedical(medical);
      setEducational(educational);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("gender", data.gender);
      formData.append("dob", data.dob);
      //   formData.append("password", data.password);
      formData.append("address[state]", data.state);
      formData.append("address[pin]", data.pin);
      formData.append("address[fullAddress]", data.fullAddress);
      formData.append("about", data.about);
      formData.append("relation", data.relation);
      formData.append("profileimage", profileimg);
      formData.append("parent", user._id);
      if (medical.length > 0) {
        medical.forEach((file) => {
          formData.append("medical", file);
        });
      }

      if (educational.length > 0) {
        educational.forEach((file) => {
          formData.append("educational", file);
        });
      }

      const res = await axios.post(
        `${BaseUrl}/student/update/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res.data);
      navigate(-1);
      setData({
        name: "",
        email: "",
        number: "",
        address: "",
        gender: "",
        dob: "",
        // password: "",
        income: "",
        occupation: "",
      });
      //   toast.success(res.data.message, {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //     // transition: Bounce,
      //   });
    } catch (error) {
      console.log(error);
      //   toast.error(error.response.data.message, {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //     // transition: Bounce,
      //   });
    }
  };

  // console.log(data);
  // console.log(profileimg);
  // console.log(educational);
  // console.log(medical);

  return (
    <div className="p-4">
      {/* <h2 class="text-center text-info">Register</h2> */}

      <div class="container  ">
        <form onSubmit={HandleSubmit}>
          <div class="row jumbotron box8 p-5 g-4 bg-secondary">
            <div class="col-sm-12 mx-t3 mb-4 ">
              <h2 class="text-center text-dark">Edit</h2>
            </div>
            <div class="col-sm-6 form-group ">
              <label className="text-dark" for="name-f">
                Full Name
              </label>
              <input
                type="text"
                class="form-control  border-2 border-secondary"
                name="name"
                id="name-f"
                value={data.name}
                onChange={HandleOnchange}
                placeholder="Enter  name."
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="profileimg">
                Image
              </label>
              <img
                style={{ height: "50px", width: "50px" }}
                src={`${BaseUrl}/uploads/${profileimg}`}
              />
              <input
                type="file"
                class="form-control"
                name="profileimg"
                value={data.profileimg}
                onChange={(e) => setProfileimg(e.target.files[0])}
                id="profileimg"
                placeholder=""
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
                id="email"
                value={data.email}
                onChange={HandleOnchange}
                placeholder="Enter email."
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="addr">
                Address
              </label>
              <textarea
                type="text"
                class="form-control"
                name="fullAddress"
                id="addr"
                value={data.fullAddress}
                onChange={HandleOnchange}
                placeholder="Locality/House/Street no."
              />
            </div>
            <div class="col-sm-4 form-group">
              <label className="text-dark" for="State">
                State
              </label>
              <input
                type="text"
                class="form-control"
                name="state"
                id="State"
                value={data.state}
                onChange={HandleOnchange}
                placeholder="Enter your state name."
              />
            </div>

            <div class="col-sm-2 form-group">
              <label className="text-dark" for="zip">
                Pin-Code
              </label>
              <input
                type="Number"
                class="form-control"
                name="pin"
                id="zip"
                value={data.pin}
                onChange={HandleOnchange}
                placeholder="Pin-Code."
              />
            </div>

            <div class="col-sm-3 form-group">
              <label className="text-dark" for="Date">
                Date Of Birth
              </label>
              <input
                type="Date"
                name="dob"
                class="form-control"
                id="Date"
                value={data.dob}
                onChange={HandleOnchange}
                placeholder=""
              />
            </div>
            <div class="col-sm-3 form-group">
              <label className="text-dark" for="sex">
                Gender
              </label>
              <select
                id="sex"
                name="gender"
                class="form-control browser-default custom-select"
                value={data.gender}
                onChange={HandleOnchange}
              >
                <option value="">Selected</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unspesified">Unspecified</option>
              </select>
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="tel2">
                Phone
              </label>
              <input
                type="tel2"
                name="phone"
                class="form-control"
                id="tel"
                placeholder="Enter Contact Number."
                value={data.phone}
                onChange={HandleOnchange}
              />
            </div>
            {/* <div class="col-sm-6 form-group">
              <label className="text-dark" for="pass">
                Password
              </label>
              <input
                type="Password"
                name="password"
                class="form-control"
                id="pass"
                placeholder=" password."
                // value={data.password}
                // onChange={HandleOnchange}
              />
            </div> */}

            <hr></hr>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="mc">
                Medical Certificate
              </label>
              {medical &&
                medical.map((items, index) => (
                  <img
                    className="m-1"
                    style={{ height: "50px", width: "50px" }}
                    src={`${BaseUrl}/uploads/${items}`}
                  />
                ))}
              <input
                type="file"
                class="form-control"
                name="medical"
                id="mc"
                value={data.medical}
                onChange={(e) => setMedical([...e.target.files])}
                placeholder=""
                multiple
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="about">
                About student
              </label>
              <textarea
                type="address"
                class="form-control"
                name="about"
                id="about"
                value={data.about}
                onChange={HandleOnchange}
                placeholder="enter about your kid"
              />
            </div>
            <div class="col-sm-6 form-group">
              <label className="text-dark" for="ec">
                Educational Certificates
              </label>
              {educational &&
                educational.map((items, index) => (
                  <img
                    className="m-1"
                    style={{ height: "50px", width: "50px" }}
                    src={`${BaseUrl}/uploads/${items}`}
                  />
                ))}
              <input
                type="file"
                class="form-control"
                name=""
                id="ec"
                onChange={(e) => setEducational([...e.target.files])}
                placeholder=""
                multiple
              />
            </div>

            <div class="col-sm-6 form-group">
              <label className="text-dark" for="rel">
                Relation
              </label>
              <select
                name="relation"
                class="form-control"
                value={data.relation}
                onChange={HandleOnchange}
              >
                <option value=" ">Relation to You</option>
                <option value="son">Son</option>
                <option value="daughter">daughter</option>
                {/* <option value="Guardian">Guardian</option> */}
                <option value="Other">Other</option>
              </select>
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

export default EditChildren;
