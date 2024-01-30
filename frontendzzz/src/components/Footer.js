import React, { useEffect, useState } from "react";
import '../style/style.css';

function Footer(){

    return(
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
            </div>
        </footer>
    )

}
 
export default Footer;