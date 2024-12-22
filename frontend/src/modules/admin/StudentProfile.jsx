import React, { useContext, useEffect, useState } from "react";
import "../../style/parentProfile.css";
import { AuthContext } from "../../context/AuthContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import AddProfileDetails from "./AddProfileDetails";
import { BaseUrl } from "../../constant";
import defaultUser from "../../assets/defaultUser.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Image } from "react-bootstrap";
function StudentProfile() {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [isSubmitted, setisSubmitted] = useState(false);

  const [show, setShow] = useState("about");
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  const [adddetails, setAdddetails] = useState({
    teacher: "",
    fees: "",
    adminstatus: "",
  });

  const changeTab = (props) => {
    setShow(props);
  };

  const { user } = useContext(AuthContext);

  const getStudent = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/admin/getstudent/${id}`);
      setStudent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetTeachers = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/admin/getallteacher`);
      setTeachers(res.data.teachers);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    name,
    about,
    dob,
    email,
    gender,
    parent,
    teacher,
    phone,
    fees = {},
    profileimage,
    educational,
    medical,
    adminstatus,
  } = student;

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdddetails({ ...adddetails, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();

      if (adddetails.teacher) {
        formdata.append("teacher", adddetails.teacher);
      }
      if (adddetails.fees) {
        formdata.append("fees[amount]", adddetails.fees);
      }
      if (adddetails.adminstatus) {
        formdata.append("adminstatus", adddetails.adminstatus);
      }

      console.log(adddetails);

      const res = await axios.post(
        `${BaseUrl}/student/update/${id}`,
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (res.status == 200) {
        setisSubmitted(true);
        setAdddetails({
          teacher: "",
          fees: "",
          adminstatus: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      getStudent();
      setisSubmitted(false);
    }
  }, [isSubmitted]);

  useEffect(() => {
    getStudent();
    GetTeachers();
  }, []);

  if (!user || !student || !id) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="container emp-profile ">
        <form onSubmit={HandleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <p className="bg-primary">{adminstatus}</p>{" "}
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
                      className={`nav-link ${show == "about" ? "active" : ""}`}
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
                  <li className="nav-item">
                    <button className="btn btn-success" type="submit">
                      Update
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-2">
              <button
                className=" profile-edit-btn "
              >
                Edit
              </button>
            </div> */}
          </div>
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

                <button
                  className="btn "
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  {" "}
                  Medical
                </button>
                <br />
                <button
                  className="btn "
                  onClick={() => {
                    setModalShow2(true);
                  }}
                >
                  Educational
                </button>
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
                    <div className="col-md-6">{/* <p>{occupation}</p> */}</div>
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
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>xxxxx</p>
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
                  <div className="row">
                    <div className="col-md-6">
                      <label>Teacher</label>
                    </div>
                    <div className="col-md-6">
                      <p>{teacher?.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Add Teacher</label>
                    </div>
                    <div className="col-md-6">
                      <div class="form-group">
                        <select
                          id="teacher"
                          name="teacher"
                          className="form-control browser-default custom-select"
                          // value={data.gender}
                          onChange={HandleChange}
                        >
                          <option value="">Selecte teacher</option>
                          {teachers &&
                            teachers.map((items) => (
                              <option key={items._id} value={items._id}>
                                {items.name}
                              </option>
                            ))}
                        </select>
                      </div>
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
                      <label>Fee</label>
                    </div>
                    <div className="col-md-6">
                      <p>{fees?.amount}</p>
                      {fees && fees?.amount && fees.status == "paid" ? (
                        <div className="">
                          status:<span>paid</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                 
                  <div className="row">
                    <div className="col-md-6">
                      <label>Add fee</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Number"
                        name="fees"
                        value={adddetails.fees}
                        onChange={HandleChange}
                      ></input>{" "}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>status</label>
                    </div>
                    <div className="col-md-6">
                      {/* {adminstatus && ( */}
                      <select
                        id=""
                        name="adminstatus"
                        className="form-control browser-default custom-select"
                        // value={adminstatus}
                        onChange={HandleChange}
                      >
                        {/* <option value={adminstatus}>{adminstatus}</option> */}

                        <option value="approve">approve</option>
                        <option value="pending">pending</option>
                      </select>
                      {/* )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <MedicalCertificate
        show={modalShow}
        onHide={() => setModalShow(false)}
        images={medical}
      />
      <EducationalCertificate
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        images={educational}
      />
    </div>
  );
}

function EducationalCertificate({ show, onHide, images }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      {" "}
      <Modal.Header closeButton>
        <Modal.Title>Educational</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {images?.map((items) => (
          <Image src={`${BaseUrl}/uploads/${items}`} thumbnail />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function MedicalCertificate({ show, onHide, images }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title>Medical</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {images &&
          images.map((items) => (
            <Image src={`${BaseUrl}/uploads/${items}`} thumbnail />
          ))}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default StudentProfile;
