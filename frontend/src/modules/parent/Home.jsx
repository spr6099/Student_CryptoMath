import React, { useContext, useEffect, useState } from "react";
import StudentCard from "../../components/StudentCard";
import MiniCard from "../../components/MiniCard";
import { GrScorecard } from "react-icons/gr";
import "../../style/home.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BaseUrl } from "../../constant";

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
    <div>
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
          <div className="row">
            <div className="col-6">
              <MiniCard Icon={GrScorecard} color={"bg-primary"} />
            </div>
            <div className="col-6">
              <MiniCard Icon={GrScorecard} color={"bg-success"} />
            </div>
            <div className="col-6">
              <MiniCard Icon={GrScorecard} color={"bg-danger"} />
            </div>
            <div className="col-6">
              <MiniCard Icon={GrScorecard} color={"bg-warning"} />
            </div>
          </div>
          {/* notice board */}
          <div class="card">
            <h5 class="card-header">Notice Board</h5>
            <div class="card-body">
              <div class="list-group list-group-flush notice_board_scroll">
                <li
                  class="list-group-item list-group-item-action"
                  aria-current="true"
                >
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small>And some small print.</small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
                    And some muted small print.
                  </small>
                </li>
                <li class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-body-secondary">3 days ago</small>
                  </div>
                  <p class="mb-1">Some placeholder content in a paragraph.</p>
                  <small class="text-body-secondary">
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
