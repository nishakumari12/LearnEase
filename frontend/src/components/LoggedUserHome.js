import React from "react";
import '../style/style.css';
import Navigation from "./Navigation";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Footer from "./Footer";
import HomeCourse from "./HomeCourse";
import p1Image from '../style/images/p1.jpg';
import p2Image from '../style/images/p2.jpg';
import p3Image from '../style/images/p3.jpg';
import p4Image from '../style/images/p4.jpg';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../service/firebase';

function LoggedUserHome(){
 

    return (
        <div>
          {/* Navigation */}
          <Navigation

          activePage={'homePage'}
          />
          {/*Home*/}
          <section id="home">
            <h2>Unlock Your Potential with Learnease</h2>
            <p>At LearnEase, we believe that education should be accessible, enjoyable, and empowering for everyone. Whether you're a student, professional, or lifelong learner, our platform is designed to make learning a breeze.</p>
            <div className="btn">
              <a className="blue" href="about">Learn More</a>
              <a className="yellow" href="course">Visit Courses</a>
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
          <HomeCourse/>
          {/*registration*/}
          <section id="registration">
            <div className="reminder">
              <p>Get 100 Online Courses for free</p>
              <h1>Register To Get It</h1>
              <div className="time">
                <div className="date">
                  18 <br /> Days                
                </div>
                <div className="date">
                  12 <br /> Hours                
                </div>
                <div className="date">
                  23 <br /> Mins              
                </div>
                <div className="date">
                  06 <br /> Secs                
                </div>
              </div>
            </div>
            <div className="form">
              <h3>Create Free Account Now!</h3>
              <form action="connect.php" method="post">
                <input type="text" placeholder="Name" name="name" id="name" />
                <input type="text" placeholder="Email Address" name="email" id="email" />
                <input type="text" placeholder="Phone Number" name="number" id="number" />
                <div className="btn">
                  <input type="submit" />
                </div>
              </form></div>
          </section>
          {/*profiles*/}
          <section id="experts">
            <h1>Community Experts</h1>
            <p>Join our vibrant community of experts and unlock boundless knowledge.</p>
            <div className="expert-box">
              <div className="profile">
                <img src={p1Image} alt="" />
                <h6>Ema Irnik</h6>
                <p>Python Expert</p>
                <div className="pro-links">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#4A4A88" }} />
                  <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#4A4A88" }} />
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#4A4A88" }} />
                </div>
              </div>
              <div className="profile">
                <img src="/style/images/p3.jpg" alt="" />
                <h6>Maalik</h6>
                <p>Full Stack Developer</p>
                <div className="pro-links">
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{ color: "#4A4A88" }} />
                <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#4A4A88" }} />
                <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#4A4A88" }} />
                </div>
              </div>
              <div className="profile">
                <img src="/style/images/p4.jpg" alt="" />
                <h6>Jennifer</h6>
                <p>Design Expert</p>
                <div className="pro-links">
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{ color: "#4A4A88" }} />
                <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#4A4A88" }} />
                <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#4A4A88" }} />
                </div>
              </div>
              <div className="profile">
                <img src="/style/images/p2.jpg" alt="" />
                <h6>Jason</h6>
                <p>Data Analysis Expert</p>
                <div className="pro-links">
                <FontAwesomeIcon icon="fa-brands fa-facebook" style={{ color: "#4A4A88" }} />
                <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#4A4A88" }} />
                <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#4A4A88" }} />
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      );

}

export default LoggedUserHome;