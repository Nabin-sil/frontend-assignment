import React, { useState } from "react";
import './Navbar.css'
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
  <nav className="navbar navbar-expand-sm   navbar-light bg-light">
  <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

  {/* Company Logo */}
  <a className="navbar-brand" href="/#">
          <img
            src="https://digitalmediathoughts.com/wp-content/uploads/2018/12/2c8204e52f9d637c7f7910c03e1e36fb-1024x631.jpeg"
            alt="Company Logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%", marginLeft:"10px" }}
          />
        </a>

        <div  className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"
           style={{ marginLeft:"10px" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="/#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">Cart
              </a>
            </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/#">Contact Us</a>
          </li>
         
           
          </ul>
          <div className="social-part">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </nav>


    </div>
  )
}
