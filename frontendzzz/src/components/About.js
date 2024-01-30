import React from "react";
import '../style/style.css';
import Navigation from "./Navigation";
import Footer from "./Footer";

function About() {
    return (
        <div>
          {/* Navigation */}
          <Navigation

          activePage={'aboutPage'}
          />

          {/*Home*/}
          <section id="about-home">
            <h2>About Learnease</h2>
          </section>
          <section id="about-container">
            <div className="about-img">
              <img src="images/back1.png" alt="" />
            </div>
            <div className="about-text">
              <h2>Welcome to Learnease, Enhance your skills with best Online Courses</h2>
              <p>You can start and finish one of these popular courses in under a day-for free! Check out the list below. take the course for free</p>
              <div className="about-fe">
                <img src="images/b1.png" alt="" />
                <div className="fe-text">
                  <h5>400+ Courses</h5>
                  <p>You can start and finish one of these popular courses in under our site</p>
                </div>
              </div>
              <div className="about-fe">
                <img src="images/b2.png" alt="" />
                <div className="fe-text">
                  <h5>Lifetime Access</h5>
                  <p>You can start the paid courses</p>
                </div>
              </div>
            </div>
          </section>
          {/*features*/}
          <section id="features">
            <h1>Awesome Features</h1>
            <p>Replenish man have thing gathering lights yielding shall you</p>
            <div className="fea-base">
              <div className="fea-box">
                <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
                <h3>Scholarship Facility</h3>
                <p>Empowering dreams through accessible scholarships. Apply for opportunities today!</p> 
              </div>
              <div className="fea-box">
                <i className="fa-sharp fa-solid fa-globe" aria-hidden="true" />
                <h3>Online Courses</h3>
                <p>Flexible, expert-led courses for growth and skill enhancement.</p> 
              </div>
              <div className="fea-box">
                <i className="fa-solid fa-award" aria-hidden="true" />
                <h3>Gobal Certification</h3>
                <p>Acquire Globally Recognized Certifications to Validate Your Expertise</p> 
              </div>
            </div>
          </section>
          <section id="trust">
            <h1>Trusted By</h1>
            <p>we are trusted by the followings ,lets see</p>
            <div className="trust-img">
              <img src="images/t1.png" alt="" />
              <img src="images/t2.png" alt="" />
              <img src="images/t3.png" alt="" />
              <img src="images/t4.png" alt="" />
              <img src="images/t5.png" alt="" />
              <img src="images/t6.png" alt="" />
            </div>
          </section>
          <Footer/>
        </div>
      );

}


export default About;


