import React, { useContext, useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard";
import MiniCard from "../../components/MiniCard";
import { GrScorecard } from "react-icons/gr";
import "../../style/home.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BaseUrl } from "../../constant";
import educationPng from "../../assets/home/education.jpg";

function Home() {
  const [childrens, setchildrens] = useState([]);
  const { user } = useContext(AuthContext); // Ensure user is being set properly

  useEffect(() => {
    // Check if user is defined before calling GetChildrens
    if (user?._id) {
      GetChildrens(user._id);
    }
  }, [user]);

  const GetChildrens = async (userId) => {
    try {
      console.log("Fetching children for userId:", userId);

      const res = await axios.get(`${BaseUrl}/parent/getchildrens/${userId}`);
      setchildrens(res.data.data);
    } catch (error) {
      console.log("Error fetching children:", error);
    }
  };

  console.log("Children:", childrens);

  return (
    <div className="home_container">
      <img src={educationPng} alt="education" className="education_img" />
      <div className="row minicard_container mb-3">
        <div className="col-sm-4">
          <MiniCard
            Icon={GrScorecard}
            style={{
              backgroundColor: "#CFE8FF",
              color: "#3C91E6",
            }}
            title={2000}
            subTitle={'fees'}
          />
        </div>
        <div className="col-sm-4">
          <MiniCard
            Icon={GrScorecard}
            style={{
              backgroundColor: "#FFF2C6",
              color: "#FFCE26",
            }}
            title={2000}
            subTitle={'fees'}
          />
        </div>
        <div className="col-sm-4">
          <MiniCard
            Icon={GrScorecard}
            style={{
              backgroundColor: "#FFE0D3",
              color: "#FD7238",
            }}
            title={2000}
            subTitle={'fees'}
          />
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          {childrens.map((item, index) => (
            <StudentCard
              name={item.name}
              gender={item.gender}
              image={item.profileimage}
              id={item._id}
            />
          ))}
        </div>
        <div className="col-md-6">
          {/* notice board */}
          <div className="card">
            <h5 className="card-header">Notice Board</h5>
            <div className="card-body">
              <div className="list-group list-group-flush notice_board_scroll">
                <li
                  className="list-group-item list-group-item-action"
                  aria-current="true">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                  </div>
                  <p className="mb-1">Some placeholder content in a paragraph.</p>
                  <small className="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
