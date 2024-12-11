import React, { useContext, useState } from "react";
import "../../style/parentProfile.css";
import { AuthContext } from "../../context/AuthContext";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProfileDetails from "./AddProfileDetails";

function Profile() {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading</p>;
  }

  const { name, email, number } = user;

  const changeTab = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="container emp-profile bg-secondary">
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt=""
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
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
                      <p>Kshiti Ghelani</p>
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
                      <p>xxxxxx</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Address</label>
                    </div>
                    <div className="col-md-6">
                      <p>xxxxx</p>
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
                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>xxxx</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>xxxxx</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Your Bio</label>
                      <br />
                      <p>Your detail description</p>
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
