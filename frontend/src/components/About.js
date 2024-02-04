import React from "react";
import '../style/style.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import b1Image from '../style/images/b1.png';
import back from '../style/images/back1.png';
import b2Image from '../style/images/b2.png';
import t1 from '../style/images/t1.png';
import t2 from '../style/images/t2.png';
import t3 from '../style/images/t3.png';
import t4 from '../style/images/t4.png';
import t5 from '../style/images/t5.png';
import t6 from '../style/images/t6.png';


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
              <img src={back} alt="" />
            </div>
            <div className="about-text">
              <h2>Welcome to Learnease, Enhance your skills with best Online Courses</h2>
              <p>You can start and finish one of these popular courses in under a day-for free! Check out the list below. take the course for free</p>
              <div className="about-fe">
                <img src={b1Image} alt="" />
                <div className="fe-text">
                  <h5>400+ Courses</h5>
                  <p>You can start and finish one of these popular courses in under our site</p>
                </div>
              </div>
              <div className="about-fe">
                <img src={b2Image} alt="" />
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
              <img src={t1} alt="" />
              <img src={t2} alt="" />
              <img src={t3} alt="" />
              <img src={t4} alt="" />
              <img src={t5} alt="" />
              <img src={t6} alt="" />
            </div>
          </section>
          <Footer/>
        </div>
      );

}


export default About;


