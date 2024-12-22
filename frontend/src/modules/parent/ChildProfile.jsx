import React, { useContext, useEffect, useState } from "react";
import "../../style/childrens.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BaseUrl } from "../../constant";
import { Link, useParams, useNavigate } from "react-router-dom";
import defaultUser from "../../assets/defaultUser.png";
import { Button, Modal } from "react-bootstrap";
import PaymentComponent from "../../components/RazorPay";

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

function Childrens() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [studentdata, setstudentdata] = useState({});

  const [show, setShow] = useState("about");
  const [modalShow, setModalShow] = React.useState(false);

  const [feedback, setfeedback] = useState({
    studentId: id,
    teacherId: "",
    message: "",
  });

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

  const {
    name,
    email,
    phone,
    image,
    teacher = {},
    fees = {},
    profileimage,
    address = {},
  } = studentdata;
  const { amount } = fees;
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

  const HandleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BaseUrl}/parent/addfeedback`, feedback);
      console.log(res.data);
      setfeedback({ ...feedback, message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  // navigete to chat
  const naviageteToChat = async () => {
    //----- this fucntion used for------
    // 1 . send reciver id and sender id to backend
    // 2 Check both IDs in the chat model, and if any chat includes both IDs, then navigate to the chat with the corresponding chat ID
    //
    // 3.Else, in the backend, create a new chat and navigate to the chat ID
    if (!user && !teacher && !id) return;
    const data = {
      senderId: user?._id,
      receiverId: teacher?._id,
      studentId: id,
    };
    try {
      const res = await axios.post(`${BaseUrl}/chat/get_or_create`, data);
      navigate(`/parent/chat/${res.data?.data?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="container emp-profile ">
          <div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src={
                      image !== ""
                        ? `${BaseUrl}/uploads/${profileimage}`
                        : defaultUser
                    }
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
                        <label>Address</label>
                      </div>
                      <div className="col-md-6">
                        <p>{address?.fullAddress}</p>
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
                            image ? `${BaseUrl}/uploads/${image}` : defaultUser
                          }
                          alt=""
                          style={{ height: "100px", width: "100px" }}
                        />{" "}
                      </div>
                      <div className="col-md-6">
                        <p>{teacher.name}</p>
                        {/* <Link to={`/parent/chat/${teacher._id}/${_id}`}> */}
                        <button
                          className="btn btn-primary"
                          onClick={naviageteToChat}
                        >
                          chat
                        </button>
                        {/* </Link> */}
                      </div>
                    </div>

                    <form onSubmit={HandleFeedbackSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Provide FeedBack</label>
                        </div>
                        <div className="col-md-10">
                          <textarea
                            value={feedback.message}
                            className="w-100 rounded-4 p-3"
                            placeholder="enter your feedback"
                            onChange={(e) =>
                              setfeedback({
                                studentId: id,
                                teacherId: teacher._id,
                                message: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                          <button type="submit" className="text-end">
                            submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      show === "fee" ? "show active" : ""
                    } `}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    {/* <div className="row">
                          <div className="col-md-6">
                            <label>Paid</label>
                          </div>
                          <div className="col-md-6">
                            <p>{amount}</p>
                          </div>
                        </div> */}

                    <div className="row">
                      <div className="col-md-6">
                        <label> fee</label>
                      </div>
                      <div
                        className="col-md-6"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        {" "}
                        <div  >{amount}</div >
                        {fees && fees?.amount && fees.status == "paid" ? (
                          <div className="">status:<span>paid</span></div>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() => setModalShow(true)}
                          >
                            click to pay
                          </button>
                        )}
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        amount={amount}
      />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  const { id, amount } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PaymentComponent id={id} amount={amount} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Childrens;
