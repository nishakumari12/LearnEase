import React from 'react';

import '../style/style.css'
const Blogs = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <img src="images/logo4.jpg" alt="Logo" />
        <div className="navigation">
          <ul>
            <i id="menu-close" className="fa-solid fa-circle-xmark" aria-hidden="true" />
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="course.html">Courses</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <img id="menu-btn" src="images/menu.jpg" alt="" />
        </div>
      </nav>
      {/*Home*/}
      <section id="home">
        <h2>Unlock Your Potential with Learnease</h2>
        <p>At LearnEase, we believe that education should be accessible, enjoyable, and empowering for everyone. Whether you're a student, professional, or lifelong learner, our platform is designed to make learning a breeze.</p>
        <div className="btn">
          <a className="blue" href="about.html">Learn More</a>
          <a className="yellow" href="course.html">Visit Courses</a>
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
      <section id="course">
        <h1>Our Popular Courses</h1>
        <p>Discover our most popular courses and join the learning revolution</p>
        <div className="course-box">
          <div className="courses">
            <img src="images/c1.jpg" alt="" />
            <div className="details">
              <span>Updated 21/05/2021</span>
              <h6>JavaScript Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">
              $49.99
            </div>
          </div>
          <div className="courses">
            <img src="images/c2.jpg" alt="" />
            <div className="details">
              <span>Updated 30/06/2022</span>
              <h6>CSS Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">
              $49.99
            </div>
          </div>
          <div className="courses">
            <img src="images/c3.jpg" alt="" />
            <div className="details">
              <span>Updated 05/05/2019</span>
              <h6>Python Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">
              $49.99
            </div>
          </div>
          <div className="courses">
            <img src="images/c4.jpg" alt="" />
            <div className="details">
              <span>Updated 21/04/2021</span>
              <h6>C++ Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">
              $49.99
            </div>
          </div>
          <div className="courses">
            <img src="images/c5.jpg" alt="" />
            <div className="details">
              <span>Updated 21/05/2021</span>
              <h6>OPPS Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">
              $49.99
            </div>
          </div>
          <div className="courses">
            <img src="images/c6.jpg" alt="" />
            <div className="details">
              <span>Updated 21/05/2021</span>
              <h6>AI Beginners Course</h6>
              <div className="star">
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <i className="fas fa-star" aria-hidden="true" />
                <span>(239)</span>
              </div>
            </div>
            <div className="cost">
              $49.99
            </div>
          </div>
        </div>
      </section>
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
            <img src="images/p1.jpg" alt="" />
            <h6>Ema Irnik</h6>
            <p>Python Expert</p>
            <div className="pro-links">
              <i className="fab fa-facebook" aria-hidden="true" />
              <i className="fab fa-instagram" aria-hidden="true" />
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </div>
          </div>
          <div className="profile">
            <img src="images/p3.jpg" alt="" />
            <h6>Maalik</h6>
            <p>Full Stack Developer</p>
            <div className="pro-links">
              <i className="fab fa-facebook" aria-hidden="true" />
              <i className="fab fa-instagram" aria-hidden="true" />
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </div>
          </div>
          <div className="profile">
            <img src="images/p4.jpg" alt="" />
            <h6>Jennifer</h6>
            <p>Design Expert</p>
            <div className="pro-links">
              <i className="fab fa-facebook" aria-hidden="true" />
              <i className="fab fa-instagram" aria-hidden="true" />
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </div>
          </div>
          <div className="profile">
            <img src="images/p2.jpg" alt="" />
            <h6>Jason</h6>
            <p>Data Analysis Expert</p>
            <div className="pro-links">
              <i className="fab fa-facebook" aria-hidden="true" />
              <i className="fab fa-instagram" aria-hidden="true" />
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-col">
          <h3>Top Prooducts</h3>
          <li>Manager Reputation</li>
          <li>Power Tools</li>
          <li>Managed Websites</li>
          <li>Marketing Services</li>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <li>Jobs</li>
          <li>Brand Assets</li>
          <li>Investor Relations</li>
          <li>Terms of Service</li>
        </div>
        <div className="footer-col">
          <h3>Features</h3>
          <li>Manager Reputation</li>
          <li>Power Tools</li>
          <li>Managed Websites</li>
          <li>Marketing Services</li>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <li>Guides</li>
          <li>Research</li>
          <li>Experts</li>
          <li>Marketing Services</li>
        </div>
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>You can trust us, we onlu send promo offers ,</p>
          <div className="subscribe">
            <input type="text" placeholder="Your Email Address" />
            <a href="#" className="yellow">SUBSCRIBE</a>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright @2023 All rights reserved | This template is made by EDU TECH</p>
          <div className="pro-links">
            <i className="fab fa-facebook" aria-hidden="true" />
            <i className="fab fa-instagram" aria-hidden="true" />
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </div>
        </div></footer>
    </div>
  );
  };
  
  export default Blogs;