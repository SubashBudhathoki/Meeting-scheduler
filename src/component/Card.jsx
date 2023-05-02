import React from "react";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "../assets/style/Card.css";
import { Link } from "react-router-dom";

const Card = ({ times, minute, page }) => {
  return (
    <>
      <Link
        to={`/${page}`}
        style={{ textDecoration: "none", color: "black", fontSize: "1.2rem" }}
      >
        <div className="cards">
          <div>
            <p>{times}</p>
          </div>

          <div className="cardsinner">
            <div>
              <span>
                <BsFillStopwatchFill /> {minute}
              </span>
            </div>
            <div>
              <span>
                1 <FaUser /> 1
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
