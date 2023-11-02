import React from "react";
import EPL from "./EPL.png";
import globesvgrepocom from "./globe-svgrepo-com.png";
import searchalt1svgrepocom from "./search-alt-1-svgrepo-com.png";
import { Link } from "react-router-dom";
const Head = () => {
  return (
    <header>
      <Link className="home-link" to={`/`}>
        <img className="logo" src={EPL} alt="EPL Logo" />
      </Link>
      <div className="header-box">
        <div className="search header-buttons">
          <p>Search</p>
          <input type="text" name="" id="" className="search-bar" />
          <div className="search-icon">
            <Link to="">
              <img className="icons" src={globesvgrepocom} alt="Search icon" />
            </Link>
          </div>
        </div>

        <div className="location header-buttons">
          <p>Location</p>
          <div className="location-icon">
            <Link to="">
              <img
                className="icons"
                src={searchalt1svgrepocom}
                alt="Globe icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Head;
