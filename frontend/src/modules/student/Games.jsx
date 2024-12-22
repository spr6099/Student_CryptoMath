import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import typing from "../../assets/typingg.jpg";
import guess from "../../assets/guess.jpg";
import fruit from "../../assets/slicer.jpg";
import snake from "../../assets/snake.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BaseUrl } from "../../constant";

function Games() {
  const { user } = useContext(AuthContext);

  const games = [
    user?.games?.snake,
    user?.games?.guess,
    user?.games?.typing,
    user?.games?.fruit,
  ];
  
  console.log(user);
  // console.log(user.games.snake);

  if (!user) {
    return <p>Loading</p>;
  }
  // if (
  //   user.games.snake == false &&
  //   user.games.guess == false &&
  //   user.games.typing == false &&
  //   user.games.fruit == false
  // ) {
  //   return <p>No games allocated</p>;
  // }
  if (games.every(game => game === false)) {
    return <p>No games allocated</p>;
  }
  return (
    <div>
      <div className="">
        <div className="row ms-5 m-3 ">
          {/* games */}
          <div
            className={`col-3 m-3 ${
              user.games.typing !== true ? "hidden" : ""
            }`}
          >
            <div
              className="  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/typing`}>
                <img
                  src={typing}
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Typingg</button>
                </div>
              </Link>
             
            </div>
          </div>

          <div
            className={`col-3 m-3 ${user.games.guess !== true ? "hidden" : ""}`}
          >
            <div
              className=" p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/guess`}>
                <img
                  src={guess}
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">guess</button>
                </div>
              </Link>
              {/* <div>
                <h7 className="text-dark">HighScore:</h7>
                <br />
                <h8 className="text-dark">TotalPlay:878</h8>
              </div> */}
            </div>
          </div>

          <div
            className={`col-3 m-3 ${user.games.fruit !== true ? "hidden" : ""}`}
          >
            <div
              className="  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/fruit`}>
                <img
                  src={fruit}
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">Fruit Slicer</button>
                </div>
              </Link>
                
            </div>
          </div>

          <div
            className={`col-3 m-3 ${user.games.snake !== true ? "hidden" : ""}`}
          >
            <div
              className="  p-2"
              style={{ Height: "200px", width: "200px" }}
            >
              <Link to={`/student/snake`}>
                {/* <Link to={`/student/snake`} > */}

                <img
                  src={snake}
                  height={"200px"}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                ></img>
                <div>
                  <button className="w-100 ">snake react</button>
                </div>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
