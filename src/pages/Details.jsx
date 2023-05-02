import React, { useState } from "react";
import "../assets/style/Details.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillStopwatchFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillCalendar } from "react-icons/ai";
import my from "../assets/images/my.jpg";

import {
  setUsername,
  setUseremail,
  setUsernote,
  setguestmail,
} from "../reduce/combine/formSlice";

const Details = () => {
  const thirtyValue = useSelector((state) => state.thirtySlice.thirtyValue);
  const fifteenValue = useSelector((state) => state.fifteenSlice.fifteenValue);
  const countryname = useSelector((state) => state.date.countryname);

  const day = useSelector((state) => state.date.day);
  const month = useSelector((state) => state.date.month);
  const time = useSelector((state) => state.date.time);

  const { paramidfrom } = useParams();
  console.log(paramidfrom);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [gToggle, setgToggle] = useState(false);

  const guestToggle = () => {
    setgToggle(!gToggle);
  };

  const [input, setInput] = useState({
    Username: "",
    Useremail: "",
    guestmail: "",
    Usernote: "",
  });

  const namehandle = (event) => {
    return setInput((prevState) => {
      return { ...prevState, Username: event.target.value };
    });
  };

  const emailhandle = (event) => {
    return setInput((prevState) => {
      return { ...prevState, Useremail: event.target.value };
    });
  };
  const guestemailhandle = (event) => {
    return setInput((prevState) => {
      return { ...prevState, guestmail: event.target.value };
    });
  };
  const texthandle = (event) => {
    return setInput((prevState) => {
      return { ...prevState, Usernote: event.target.value };
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();

    navigate(`/completepage/${paramidfrom}`);
    dispatch(setUsername(input.Username));
    dispatch(setUseremail(input.Useremail));
    dispatch(setguestmail(input.guestmail));

    dispatch(setUsernote(input.Usernote));
  };
  return (
    <>
      <div className="detailpage">
        <div className="innerDetailpage">
          <div className="owner">
            <div>
              <img src={my} alt="" className="slogoimg" />
            </div>
            <span>Subash Budhathoki</span>
            <h3 style={{ fontSize: "0.8rem" }}>
              {paramidfrom === "30min" ? thirtyValue : fifteenValue}
            </h3>
            <div className="meetingshedule">
              <span>
                <BsFillCameraVideoFill /> Call Video
              </span>
              <span>
                <BsFillStopwatchFill />{" "}
                {paramidfrom === "30min" ? "30 Min" : "15 Min"}
              </span>
              <span>
                <AiFillCalendar />
                {time}/{day}/{month}/ 2023
              </span>
            </div>
          </div>
          <div className="user">
            <form onSubmit={formsubmit}>
              Your Name
              <input
                type="text"
                placeholder="Enter Name"
                onChange={namehandle}
                style={{
                  width: "100%",
                  height: "3rem",
                  paddingLeft: "0.5rem",
                  fontSize: "1rem",
                }}
                required
              />
              Email address
              <input
                type="text "
                placeholder="email@gmail.com"
                onChange={emailhandle}
                style={{
                  width: "100%",
                  height: "3rem",
                  paddingLeft: "0.5rem",
                  fontSize: "1rem",
                }}
                required
              />
              {gToggle && (
                <div>
                  Guest
                  <input
                    type="text "
                    placeholder="email@gmail.com"
                    onChange={guestemailhandle}
                    style={{
                      width: "100%",
                      height: "3rem",
                      paddingLeft: "0.5rem",
                      fontSize: "1rem",
                    }}
                    required
                  />
                </div>
              )}
              Additional Note
              <textarea
                name=""
                id=""
                cols="50"
                rows="4"
                placeholder="Your View"
                onChange={texthandle}
                style={{ paddingLeft: "0.5rem", fontSize: "1rem" }}
                required
              ></textarea>
              <div className=" btn-value">
                <div>
                  <span style={{ fontSize: "1.5rem" }} onClick={guestToggle}>
                    <AiOutlineUserAdd />
                  </span>
                </div>
                <div className="btn-value-inside">
                  <Link to="/">
                    <button style={{ marginRight: "0.5rem" }}>Cancel</button>
                  </Link>
                  <button
                    type="submit"
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
