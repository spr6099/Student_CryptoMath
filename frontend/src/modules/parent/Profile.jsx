import React, { useContext, useState } from "react";
import "../../style/parentProfile.css";
import { AuthContext } from "../../context/AuthContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProfileDetails from "./AddProfileDetails";
import { BaseUrl } from "../../constant";
import defaultUser from "../../assets/defaultUser.png";
function Profile() {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const { user } = useContext(AuthContext);
  if (!user) {
    return <p>Loading</p>;
  }

  const { name, email, number, occupation, address = {}, image, income } = user;
  const {
    state = "N/A",
    pin = "000000",
    fullAddress = "Not provided",
  } = address;

  const changeTab = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="container emp-profile ">
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src={
                    image !== "" ? `${BaseUrl}/uploads/${image}` : defaultUser
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
                      onClick={changeTab}
                      className={`nav-link ${!show ? "active" : ""}`}
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected={!show}
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={changeTab}
                      className={`nav-link ${show ? "active" : ""}`}
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={show}
                    >
                      Timeline
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
                  className={`tab-pane fade ${!show ? "show active" : ""} `}
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
                  className={`tab-pane fade ${show ? "show active" : ""} `}
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Income</label>
                    </div>
                    <div className="col-md-6">
                      <p>{income}</p>
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
    >
      <div>
        <AddProfileDetails />
      </div>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Profile;
