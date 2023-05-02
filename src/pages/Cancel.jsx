import React from "react";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import "../assets/style/Cancel.css";

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-wrapper">
        <div>
          <span className="cancel-icon">
            <ImCross />
          </span>
        </div>
        <div>
          <h3 className="cancel-header">Your event has been cancelled</h3>
        </div>
        <div>
          <p className="cancel-message">
            You can{" "}
            <Link className="cancel-link" to="/">
              schedule your meeting again.
            </Link>{" "}
            Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
