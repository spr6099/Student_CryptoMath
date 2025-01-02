import React, { useContext } from "react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentBold } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import pointingGirl from "../assets/home/pointing-out1.png";
import TreeImg from "../assets/home/tree.jpg";
import accordionImg from "../assets/home/home_page.webp";
import heroImg from "../assets/home/admin_home.webp";
import { AuthContext } from "../context/AuthContext";
import "../style/landing.css";

function LandingPage() {
  // const context = useContext(AuthContext);
  // console.log(context.user);

  return (
    <>
      <section className="top_section">
        <div>
          <h1>Welcome to CryptoMath</h1>
          <h2>Where Education Meets Innovation</h2>
          <p>
            At Cryptomath, we are transforming education into an engaging,
            interactive, and efficient journey for students, parents, and
            educators. Our platform is designed to make school management and
            learning experiences seamless, effective, and personalized.
          </p>
        </div>
        <img src={pointingGirl} alt="" className="hero_img" />
      </section>
      <h1 className="landing_card_main_title">About US</h1>
      <section className="landing_about_section">
        <div>
          <h2>Our Mission</h2>
          <p className="landing_about">
            We aim to create a collaborative environment that empowers every
            child to reach their full potential. With advanced tools, real-time
            insights, and a user-friendly interface, Cryptomath bridges the gap
            between schools and families, ensuring no child is left behind.
          </p>
        </div>
        <img src={TreeImg} alt="about" />
      </section>
      {/* -----------------card -------------------- */}
      <h1 className="landing_card_main_title">What Makes Cryptomath Unique?</h1>
      <section className="landing_card_body">
        <div class="landing_card landing_card_one">
          <div class="landing_card_overlay"></div>
          <div class="landing_card_circle">
            <PiStudentBold className="landing_card_icon" />
          </div>
          <h3>For Students</h3>
          <ul>
            <li>
              Access assignments, grades, and learning materials all in one
              place.
            </li>
            <li>Stay motivated with personalized performance dashboards.</li>
            <li>
              Take charge of your learning journey with innovative tools and
              resources.
            </li>
          </ul>
        </div>
        <div class="landing_card landing_card_two">
          <div class="landing_card_overlay"></div>
          <div class="landing_card_circle">
            <RiParentLine className="landing_card_icon" />
          </div>
          <h3>For Parents</h3>
          <ul>
            <li>
              Track your child’s progress, attendance, and activities in real
              time.
            </li>
            <li>
              Communicate directly with teachers and stay updated on school
              events.
            </li>
            <li>
              Get insights into your child’s strengths and areas for
              improvement.
            </li>
          </ul>
        </div>
        <div class="landing_card landing_card_three">
          <div class="landing_card_overlay"></div>
          <div class="landing_card_circle">
            <LiaChalkboardTeacherSolid className="landing_card_icon" />
          </div>
          <h3>For Teachers and Administrators</h3>
          <ul>
            <li>
              Simplify your workflow with automated attendance, grading, and
              reporting tools.
            </li>
            <li>Foster better communication with parents and students.</li>
            <li>Manage class schedules, events, and records with ease.</li>
          </ul>
        </div>
      </section>
      {/* ------------------card ---end------------ */}
      <h1 className="landing_card_main_title">Features at a Glance</h1>
      <section className="landing_features_body">
        {/* ----------------accordion--------start------------ */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                <b>All-in-One Dashboard</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                  Easy access to everything you need, from performance data to
                  school announcements.
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                <b>Smart Notifications</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                  Stay informed with timely updates about assignments, grades,
                  and events.
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                <b>Interactive Communication</b>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                  Seamless messaging for parents, teachers, and students.
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour">
                <b>Secure Data Management</b>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                  Your information is safe with Cryptomath’s robust security
                  protocols.
                </strong>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------accordion--------end------------ */}
        <img src={accordionImg} alt="img" className="w-100 rounded-4" />
      </section>

      {/* -----------Why Choose Cryptomath?----------------- */}
      <h1 className="landing_card_main_title">Why Choose Cryptomath?</h1>
      <div className="landing_choose_card landing_card_one">
        <h4>Innovative Learning Solutions</h4>
        <p>Enhance student engagement with cutting-edge tools.</p>
      </div>
      <div className="landing_choose_card landing_card_two">
        <h4>Transparent Collaboration</h4>
        <p>
          Build stronger connections between parents, teachers, and
          administrators.
        </p>
      </div>
      <div className="landing_choose_card landing_card_three">
        <h4>Future-Ready Education</h4>
        <p>Prepare students for success in a digital-first world.</p>
      </div>

      {/* ------------------hero card --------start---------------- */}
      <section className="landing_hero_card_body">
        <div>
          <h3>Get Started Today</h3>
          <p>Join Cryptomath and take the first step towards a smarter, brighter future for your school and students. Together, we’ll redefine education and create endless possibilities for success.</p>
          <div className="three_buttons">
            <span className="landing_card_one">Explore</span>
            <span className="landing_card_two">Learn</span>
            <span className="landing_card_three">Achieve</span>
          </div>
          <b>Cryptomath – Building Bright Futures, One Student at a Time.</b>
        </div>
        <img src={heroImg} alt="hero" className="w-100 rounded-4" />
      </section>
      {/* ------------------hero card --------end---------------- */}
    </>
  );
}

export default LandingPage;
