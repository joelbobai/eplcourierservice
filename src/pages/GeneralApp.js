import React from "react";
import cargoatsea from "./cargo at sea.jpg";
import automobile34917531280 from "./automobile-3491753_1280.jpg";
import pexelsyankrukau6818154 from "./pexels-yan-krukau-6818154.jpg";
import plane40696591280 from "./plane-4069659_1280.jpg";
import { Link } from "react-router-dom";
const GeneralApp = () => {
  return (
    <>
      <section className="track" id="track">
        <h3>Track your package</h3>
        <form action="" method="">
          <input
            type="text"
            name=""
            id=""
            className="track-input"
            placeholder="Enter tracking number (s)"
          />
          <button type="submit">
            <Link to={`/Order-Tracking`}> TRACK</Link>
          </button>
        </form>
      </section>

      <section
        className="shipping"
        style={{ backgroundColor: "white" }}
        id="services"
      >
        <div className="ship-title">
          <h1>Shipping</h1>
          <p>Manage all your shipment in one place.</p>
        </div>

        <div className="shipping-categories">
          <div className="document-shipping">
            <div className="description">
              <h3>Document and Parcel Shipping</h3>
              <p>
                You want to send parcels and documents? bring it on board we'll
                take care of them.
              </p>
            </div>

            <div className="image-description">
              <img src={pexelsyankrukau6818154} alt="parcel " />
            </div>
          </div>

          <div className="document-shipping">
            <div className="description">
              <h3>Cargo Shipping</h3>
              <p>
                We offer choices that are tailored to meet your needs, whether
                you're delivering domestically or internationally.
              </p>
            </div>

            <div className="image-description">
              <img src={cargoatsea} alt="parcel " />
            </div>
          </div>
        </div>
      </section>
      <section className="shipping other-services">
        <div className="ship-title">
          <h1>Explore other services</h1>
          {/* <p>Manage all your shipment in one place.</p> */}
        </div>

        <div className="shipping-categories">
          <div className="document-shipping">
            <div className="description road">
              <h3>Road Freight</h3>
              <p>
                Sustainable supply networks are at the core of sustainable
                business. Explore our diverse logistics solutions, discover our
                commitment to sustainability, and join us in creating a better
                world through our industry.
              </p>
            </div>

            <div className="image-description">
              <img src={automobile34917531280} alt="parcel " />
            </div>
          </div>

          <div className="document-shipping air">
            <div className="description">
              <h3>Air Freight</h3>
              <p>
                With a relentless commitment to excellence and a global network
                of partners, we offer swift, reliable, and secure air freight
                solutions.{" "}
              </p>
            </div>

            <div className="image-description">
              <img src={plane40696591280} alt="parcel " />
            </div>
          </div>
        </div>
      </section>

      <section className="shipping help" id="help">
        <div className="ship-title">
          <h1>Help and Support</h1>
          <p className="help-p">
            Can't find what you're looking for?. We're happy to help
          </p>
          <Link to="">
            <h3>Contact Us</h3>
          </Link>
        </div>

        <div className="shipping-categories">
          <div className="document-shipping">
            <div className="description road">
              <Link to="" className="faq">
                <h3>FAQs</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralApp;
