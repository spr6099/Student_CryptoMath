import React from "react";
import MiniCard from "../../components/MiniCard";
import { GrScorecard } from "react-icons/gr";
import AdminCalendar from "./AdminCalendar";

function Home() {
  return (
    <div>
      <div className="row">
      
        <div className="col-6 col-md-3">
          <MiniCard
            Icon={GrScorecard}
            style={{
              backgroundColor: "#CFE8FF",
              color: "#3C91E6",
            }}
            title={2000}
            subTitle={"fees"}
          />
        </div>
        <div className="col-6 col-md-3">
          <MiniCard
            Icon={GrScorecard}
            style={{
              backgroundColor: "#FFF2C6",
              color: "#FFCE26",
            }}
            title={2000}
            subTitle={"fees"}
          />
        </div>
        <div className="col-6 col-md-3">
          <MiniCard
            Icon={GrScorecard}
            style={{
              backgroundColor: "#FFE0D3",
              color: "#FD7238",
            }}
            title={2000}
            subTitle={"fees"}
          />
        </div>
      </div>
      <div className="row">
        {/* left */}
        <div className="col-md-6"></div>
        {/* right */}
        <div className="col-md-6">
          {/* notice board */}
          <div class="card">
            <h5 class="card-header" style={{backgroundColor:'#cdffa2'}}>Notice Board</h5>
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
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <AdminCalendar />
        </div>
      </div>
    </div>
  );
}

export default Home;
