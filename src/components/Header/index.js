import React from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import "./index.css";

const Index = () => {
  return (
    <>
      <Head />
      <div className="toggle-button">
        <span className="toggle-button-icon" id="t-btn">
          &#9776;
        </span>
      </div>
      <nav>
        <div className="navigation" id="nav">
          <Link to="/">Track</Link>
          <Link to="/">Ship</Link>
          <Link to="/" id="service-link">
            Customer Service
          </Link>
          <Link to="/" id="location-link">
            Location
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Index;
