import React from "react";
import AdminCalendar from "../admin/AdminCalendar";
import educationPng from "../../assets/home/education.jpg";

function Home() {
  return (
    <div className="home_container">
      <img src={educationPng} alt="education" className="education_img" />

      <AdminCalendar />
    </div>
  );
}

export default Home;
