import React, { useContext, useEffect, useState } from "react";
import "../../style/childrens.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BaseUrl } from "../../constant";
import { Link, useParams } from "react-router-dom";
import defaultUser from "../../assets/defaultUser.png";
import { Button, Modal } from "react-bootstrap";
function Childrens() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [studentdata, setstudentdata] = useState({});

  const [show, setShow] = useState("about");
  const [modalShow, setModalShow] = React.useState(false);

  const changeTab = (props) => {
    setShow(props);
  };

  const getStudent = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/parent/getonechild/${id}`);
      setstudentdata(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);

  if (!user || !studentdata || !id) {
    return <p>Loading</p>;
  }

  const { name, email, phone, image, teacher = {} } = studentdata;

  console.log(studentdata);

  // const HandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAdddetails({ ...adddetails, [name]: value });
  // };

  // const HandleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formdata = new FormData();
  //     formdata.append("fees[amount]", adddetails.amount);
  //     formdata.append("teacher", adddetails.teacher);

  //     const res = await axios.post(
  //       `${BaseUrl}/student/update/${id}`,
  //       formdata,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div>
        <div className="container emp-profile ">
          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    // src={image ? `${BaseUrl}/uploads/${image}` : defaultUser}
                    alt=""
                    style={{ height: "100px", width: "150px" }}
                  />
                  {/* <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{name}</h5>
                  <p className="proile-rating"></p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        onClick={() => changeTab("about")}
                        className={`nav-link ${
                          show == "about" ? "active" : ""
                        }`}
                        id="home-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="home"
                        aria-selected={show === "about"}
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={() => changeTab("address")}
                        className={`nav-link ${
                          show === "address" ? "active" : ""
                        }`}
                        id="profile-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="profile"
                        aria-selected={show === "address"}
                      >
                        Address
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={() => changeTab("teacher")}
                        className={`nav-link ${
                          show === "teacher" ? "active" : ""
                        }`}
                        id="profile-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="profile"
                        aria-selected={show === "teacher"}
                      >
                        Teacher
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={() => changeTab("fee")}
                        className={`nav-link ${show === "fee" ? "active" : ""}`}
                        id="profile-tab"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="profile"
                        aria-selected={show === "fee"}
                      >
                        Fee details
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <Link to={`/parent/editchildren/${id}`}>
                  <button className=" profile-edit-btn ">Edit</button>
                </Link>
              </div>
            </div>

            <form>
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-work">
                    <p>WORK LINK</p>
                    <a>Website Link</a>
                    <br />
                    <a>Bootsnipp Profile</a>
                    <br />
                    <a>Bootply Profile</a>
                    <p>Certificates</p>

                    {/* <button
                      className="btn "
                      onClick={() => {
                        setModalShow(true);
                      }}
                    >
                      {" "}
                      Medical
                    </button> */}

                    <br />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div
                      className={`tab-pane fade ${
                        show === "about" ? "show active" : ""
                      } `}
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>{name}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>{phone}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          {/* <p>{occupation}</p> */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Address</label>
                        </div>
                        <div className="col-md-6">
                          {/* <p>{fullAddress}</p>
                        <p>{state}</p>
                        <p>{pin}</p> */}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        show === "address" ? "show active" : ""
                      } `}
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>Experience</label>
                        </div>
                        <div className="col-md-6">
                          <p>xxxx</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Hourly Rate</label>
                        </div>
                        <div className="col-md-6">
                          <p>xxx</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Total Projects</label>
                        </div>
                        <div className="col-md-6">
                          <p>xxx</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        show === "teacher" ? "show active" : ""
                      } `}
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={
                              image
                                ? `${BaseUrl}/uploads/${image}`
                                : defaultUser
                            }
                            alt=""
                            style={{ height: "100px", width: "100px" }}
                          />{" "}
                        </div>
                        <div className="col-md-6">
                          <p>{teacher.name}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Provide FeedBack</label>
                        </div>
                        <div className="col-md-10">
                          <textarea className="w-100 "></textarea>{" "}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>xxxxx</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        show === "fee" ? "show active" : ""
                      } `}
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>Paid</label>
                        </div>
                        <div className="col-md-6">
                          <p>xxxx</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Bal fee</label>
                        </div>
                        <div className="col-md-6">{/* {fee} */}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Childrens;
