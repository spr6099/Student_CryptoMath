import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure axios is imported
import { BaseUrl } from "../constant";

// Register the required components in Chart.js

const Scoretable = ({ id }) => {
  const [score, setScore] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch data using useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/student/getscore/${id}`);
        setScore(res.data.data);
      } catch (error) {
        setError("Error fetching data");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); // Run this effect when the `id` prop changes

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there is any error
  }

  return (
    <div>
      <h2>Game Score Table</h2>
      <section class="table__body">
        <table className="teacherTable">
          <thead className="teacherthead">
            <tr>
              <th>Snake</th>
              <th> Guess</th>
              <th> Typing</th>
              <th> Fruit</th>
            </tr>
          </thead>
          <tbody className="teachertbody">
            <tr>
              <td>
                {" "}
                {score.map((item, index) => (
                  <tr>{item.game === "snake" && item.score}</tr>
                ))}
              </td>
              <td>
                {" "}
                {score.map((item, index) => (
                  <tr>{item.game === "guess" && item.score}</tr>
                ))}
              </td>
              <td>
                {" "}
                {score.map((item, index) => (
                  <tr>{item.game === "typing" && item.score}</tr>
                ))}
              </td>
              <td>
                {" "}
                {score.map((item, index) => (
                  <tr>{item.game === "fruit" && item.score}</tr>
                ))}
              </td>
            </tr>
          </tbody>
        </table>{" "}
      </section>
    </div>
  );
};

export default Scoretable;
