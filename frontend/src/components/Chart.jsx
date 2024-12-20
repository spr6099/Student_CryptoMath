
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios"; // Make sure axios is imported
import { BaseUrl } from "../constant";

// Register the required components in Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ id }) => {
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

  // Group the data by game and sum the scores
  const groupedData = {};
  score.forEach((item) => {
    if (!groupedData[item.game]) {
      groupedData[item.game] = 0; // Initialize the sum for this game
    }
    groupedData[item.game] += item.score; // Sum the scores for each game
  });

  // Convert groupedData object to an array of objects
  const resultArray = Object.entries(groupedData).map(([game, totalScore]) => ({
    game,
    totalScore,
  }));

  // Extract game names and scores
  const gameNames = resultArray.map((item) => item.game);
  const scores = resultArray.map((item) => item.totalScore);

  // Pie chart data
  const data = {
    labels: gameNames, // Labels for the pie chart slices
    datasets: [
      {
        data: scores, // Data for the pie chart slices
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Slice colors
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Hover colors
      },
    ],
  };

  // Chart options (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Legend position
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`; // Show game name and score in tooltips
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>  Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;











// // Import necessary libraries
// import React, { useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // Register the required components in Chart.js
// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = async ( id ) => {
//   const [score, setscore] = useState([]);
//   // console.log();
//   try {
//     const res = await axios.get(`${BaseUrl}/student/getscore/${id}`);
//     setscore(res.data.data);
//   } catch (error) {
//     console.log(error);
//   }

//   const groupedData = {};
//   // Group the data by game and sum the scores
//   score.forEach((item) => {
//     if (!groupedData[item.game]) {
//       groupedData[item.game] = 0; // Initialize the sum for this game
//     }
//     // Sum the scores for each game
//     groupedData[item.game] += item.score;
//   });

//   // Convert groupedData object to an array of objects
//   const resultArray = Object.entries(groupedData).map(([game, totalScore]) => ({
//     game,
//     totalScore,
//   }));

//   console.log(resultArray);
//   // Output: [ { game: 'fruit', totalScore: 16 }, { game: 'snake', totalScore: 1 } ]

//   // Extract game names and scores
//   const gameNames = resultArray.map((item) => item.game);
//   const scores = resultArray.map((item) => item.totalScore);

//   // Pie chart data
//   const data = {
//     labels: gameNames, // Labels for the pie chart slices
//     datasets: [
//       {
//         data: scores, // Data for the pie chart slices
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Slice colors
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"], // Hover colors
//       },
//     ],
//   };

//   // Chart options (optional)
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top", // Legend position
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `${tooltipItem.label}: ${tooltipItem.raw}`; // Show game name and score in tooltips
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Game Scores Pie Chart</h2>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default PieChart;
