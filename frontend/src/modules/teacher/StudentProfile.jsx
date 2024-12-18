import React, { useContext, useEffect, useState } from "react";
import "../../style/parentProfile.css";
import { AuthContext } from "../../context/AuthContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProfileDetails from "./AddProfileDetails";
import { BaseUrl } from "../../constant";
import defaultUser from "../../assets/defaultUser.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import snake from "../../assets/snake.jpg";
import typing from "../../assets/typingg.jpg";
import guess from "../../assets/guess.jpg";
import fruit from "../../assets/slicer.jpg";

function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState("about");
  const [modalShow, setModalShow] = React.useState(false);
  const [student, setstudent] = useState({});
  const { user } = useContext(AuthContext);
  const [feedback, setfeedback] = useState([]);

  const {
    name,
    email,
    number,
    occupation,
    address = {},
    profileimage,
    parent,
    games = {},
  } = student;
  const {
    state = "N/A",
    pin = "000000",
    fullAddress = "Not provided",
  } = address;

  console.log(games?.snake);


  const [game, setgame] = useState({
    snake:games?.snake,
    typing: false,
    guess: false,
    fruit: false,
  });
  console.log(game?.snake);

  useEffect(() => {
    console.log(game.snake); // Logs the value of game.snake after render
  }, [game]); // Only re-run when the game state changes


  const changeTab = (props) => {
    setShow(props);
  };

  const getStudent = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/parent/getonechild/${id}`);
      setstudent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getFeedback = async (req, res) => {
    const ids = {
      studentId: id,
      teacherId: user?._id,
    };
    try {
      const res = await axios.post(`${BaseUrl}/parent/getfeedback`, ids);
      setfeedback(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleOnchange = (e) => {
    const { name, checked } = e.target;
    setgame({ ...game, [name]: checked });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", id);

      formData.append("games[snake]", game.snake);
      formData.append("games[typing]", game.typing);
      formData.append("games[guess]", game.guess);
      formData.append("games[fruit]", game.fruit);

      const res = await axios.post(
        `${BaseUrl}/student/update/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedback();
    getStudent();
  }, [user]);
  // console.log(student);

  // navigete to chat
  const naviageteToChat = async () => {
    //----- this fucntion used for------
    // 1 . send reciver id and sender id to backend
    // 2 Check both IDs in the chat model, and if any chat includes both IDs, then navigate to the chat with the corresponding chat ID
    //
    // 3.Else, in the backend, create a new chat and navigate to the chat ID
    if (!user && !parent && !id) return;
    const data = {
      senderId: user?._id,
      receiverId: parent?._id,
      studentId: id,
    };
    try {
      const res = await axios.post(`${BaseUrl}/chat/get_or_create`, data);
      navigate(`/teacher/chat/${res.data?.data?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(games);

  if (!user) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <div className="container emp-profile ">
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={
                    profileimage
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
                      className={`nav-link ${show === "about" ? "active" : ""}`}
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected={show == "about"}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => changeTab("games")}
                      className={`nav-link ${show === "games" ? "active" : ""}`}
                      id="games"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={show === "games"}
                    >
                      Games
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => changeTab("parent")}
                      className={`nav-link ${
                        show === "parent" ? "active" : ""
                      }`}
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={show === "parent"}
                    >
                      Parent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={() => changeTab("feedback")}
                      className={`nav-link ${
                        show === "feedback" ? "active" : ""
                      }`}
                      id="feedback"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected={show == "feedback"}
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <button
                className=" profile-edit-btn "
                onClick={() => setModalShow(true)}
              >
                Edit
              </button>
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
                <p>SKILLS</p>
                <a>Web Designer</a>
                <br />
                <a>Web Developer</a>
                <br />
                <a>WordPress</a>
                <br />
                <a>WooCommerce</a>
                <br />
                <a>PHP, .Net</a>
                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className={`tab-pane fade ${
                    show == "about" ? "show active" : ""
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
                      <p>{number}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{occupation}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Address</label>
                    </div>
                    <div className="col-md-6">
                      <p>{fullAddress}</p>
                      <p>{state}</p>
                      <p>{pin}</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    show == "games" ? "show active" : ""
                  } `}
                  id="gameshh"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Select Games</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Games</p>
                    </div>
                    <div className="col-md-6">
                      {/* <select className="form-select">
                        <option value="">snake</option>
                        <option value="">guess</option>
                        <option value="">fruit</option>
                        <option value="">typing</option>
                      </select> */}
                      <form className="row  gap-3" onSubmit={HandleSubmit}>
                        <div className="col-4">
                          <img src={snake} height="80px" width={"80px"}></img>
                          {/* <button className="btn">Add</button> */}
                          <input
                            type="checkbox"
                            name="snake"
                            checked={game.snake}
                            onChange={HandleOnchange}
                          ></input>
                        </div>
                        <div className="col-4">
                          <img src={guess} height="80px" width={"80px"}></img>
                          {/* <button className="btn">Add</button> */}
                          <input
                            type="checkbox"
                            name="guess"
                            onChange={HandleOnchange}
                          ></input>
                        </div>
                        <div className="col-4">
                          {" "}
                          <img src={fruit} height="80px" width={"80px"}></img>
                          {/* <button className="btn">Add</button> */}
                          <input
                            type="checkbox"
                            name="fruit"
                            onChange={HandleOnchange}
                          ></input>
                        </div>
                        <div className="col-4">
                          {" "}
                          <img src={typing} height="80px" width={"80px"}></img>
                          {/* <button className="btn">Add</button> */}
                          <input
                            type="checkbox"
                            name="typing"
                            onChange={HandleOnchange}
                          ></input>
                        </div>
                        <button
                          type="submit"
                          className=" col-4 btn btn-primary"
                        >
                          Add Games
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    show == "parent" ? "show active" : ""
                  } `}
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>{student?.parent?.name}</label>
                    </div>
                    <div className="col-md-6">
                      <button
                        onClick={naviageteToChat}
                        className="btn btn-primary"
                      >
                        chat
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    show == "feedback" ? "show active" : ""
                  } `}
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-12">
                      <label>Feedback</label>
                    </div>
                    <div className="col-10">
                      <div
                        className="border border-black p-3"
                        style={{ height: "300px", overflowY: "auto" }}
                      >
                        {feedback.length === 0 && (
                          <p
                            className="border border-black rounded-4 p-3"
                            style={{ fontSize: "15px" }}
                          >
                            no feedback
                          </p>
                        )}
                        {feedback &&
                          feedback.map((items, index) => (
                            <p
                              className="border border-black rounded-4 p-3 d-flex justify-content-between"
                              style={{ fontSize: "15px" }}
                            >
                              <span>{items.message}</span>
                              <span>
                                {moment(items?.createdAt).format("lll")}
                              </span>
                            </p>
                          ))}
                      </div>
                      {/* <textarea className="w-100" placeholder="enter your feedback"></textarea> */}
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
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Body>
        <AddProfileDetails />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default StudentProfile;
