import React from "react";
import Header from "../../components/Header/index";
import EPL from "../../components/Header/EPL.png";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./index.css";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src={EPL} alt="EPL Courier Services Logo" />
            <p>EPL Courier Services</p>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link to="about">About Us</Link>
              </li>
              <li>
                <Link rel="noopener" target="_blank" href="#services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="locations.html">Locations</Link>
              </li>
              <li>
                <Link rel="noopener" target="_blank" href="#help">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="terms">Legal Notice</Link>
              </li>
              <li>
                <Link to="terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <p>Contact Information</p>
            <p>Email: info@eplcourier.com</p>
            <p>Phone: +60 18-974-9844</p>
            <p>
              Address: <span>&#x1F3F2;</span> Fronts de Neudorf 67100
              Strasbourg, France.
            </p>
          </div>
        </div>
        <div className="footer-social">
          <p>Follow Us</p>
          <Link to="#" className="fa fa-facebook"></Link>
          <Link to="#" className="fa fa-twitter"></Link>
          <Link to="#" className="social-icon">
            LinkedIn
          </Link>
        </div>
        <hr />
        <p className="copyright">
          Copyright ©2009-2023 EPL Courier Services, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
