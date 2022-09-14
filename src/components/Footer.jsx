import React from "react";
import Logo from "../assets/logo.png";
import "../Footer.css"
import { Link } from "react-scroll"

export default function Footer() {
  return (
      <>
        <footer>
          <div className="row">
            <div className="col">
              <img src={Logo} className="logo" />
            </div>
            <div className="col">
              <h3>
                Office{" "}
                <div className="underline">
                  <span />
                </div>
              </h3>
              <p>XYZ Road</p>
              <p>ABCDE, Noida</p>
              <p>Delhi, PIN 231010, India</p>
              <p className="email">xyz123@gmail.com</p>
              <h4>+91 - 0123456789</h4>
            </div>
            <div className="col">
              <h3>
                Links{" "}
                <div className="underline">
                  <span />
                </div>
              </h3>
              <ul>
                <li>
                  <Link to="hero" className="Link" spy={true} smooth={true} offset={50} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="events" className="Link" spy={true} smooth={true} offset={50} duration={500}>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="team" className="Link" spy={true} smooth={true} offset={50} duration={500}>
                    Team
                  </Link>
                </li>
                <li>
                  
                  <Link to="alumni" className="Link" spy={true} smooth={true} offset={50} duration={500}>
                    Our Alumni
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>
                Contact Us{" "}
                <div className="underline">
                  <span />
                </div>
              </h3>
              <form action="">
                <i className="fa-solid fa-envelope" />
                <input type="email" placeholder="Enter Your Message" />
                <button>
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </form>
              <div className="social">
               <a href="https://twitter.com/technojam_gu" target="_blank">
                <i className="fa-brands fa-twitter" />
                </a> 
                <a href="https://www.instagram.com/teamtechnojam/" target="_blank">
                <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://www.facebook.com/teamtechnojam" target="_blank">
                <i className="fa-brands fa-facebook" />
                </a>
                <a href="https://www.linkedin.com/company/technojam/" target="_blank">
                <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </>
  );
}
