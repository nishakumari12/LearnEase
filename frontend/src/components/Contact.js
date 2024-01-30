import React from "react";
import '../style/style.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Contact(){
    return (
        <div>
          {/* Navigation */}
          <Navigation

          activePage={'contactPage'}
          />
          {/*Home*/}
          <section id="about-home">
            <h2>Contact Us</h2>
          </section>
          <section id="contact">
            <div className="getin">
              <h2>Get in touch</h2>
              <p>Looking fir help? Fill the form and start a new adventure.</p>
              <div className="getin-details">
                <h3>Headquaters</h3>
                <div>
                <FontAwesomeIcon
                      icon={faBuilding}
                      style={{ color: "#4A4A88" }}
                    />                  <p>744 New York Ave, Brooklyn, Kings, New York 10224</p>
                </div>
                <h3>Phone</h3>
                <div>
                <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#4A4A88" }}
                    />
                  <p>
                    (+642) 245 356 432 <br />
                    (+420) 336 476 328
                  </p>
                </div>
                <h3>Support</h3>
                <div>
                <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#4A4A88" }}
                    />
                  <p>learnease@support.com <br /> help@learnease.com</p>
                </div>
                
              </div>
            </div>
            <div className="form">
              <h4>Let's Connect</h4>
              <p>Plz feel free to contact us for any help</p>
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-col">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-col">
                <textarea name id cols={30} rows={8} placeholder="How can we help?" defaultValue={""} />
              </div>
              <div className="form-btn">
                <button>Send Message</button>
              </div>
            </div>
          </section>
          <section id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.452007036669!2d77.19061629079117!3d28.626375150221204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9eccc07d2d%3A0x6db044e71b8e8e3b!2sGurudwara%20Sri%20Bangla%20Sahib!5e0!3m2!1sen!2sin!4v1687290988958!5m2!1sen!2sin" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </section>
          <Footer/>
        </div>
      );
}

export default Contact;