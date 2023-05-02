import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/style/Complete.css";

const Completepage = () => {
  const thirtyValue = useSelector((state) => state.thirtySlice.thirtyValue);
  const fifteenValue = useSelector((state) => state.fifteenSlice.fifteenValue);
  const countryname = useSelector((state) => state.date.countryname);

  const { id } = useParams();
  const name = useSelector((state) => state.formSlice.Username);
  const email = useSelector((state) => state.formSlice.Useremail);
  const guest = useSelector((state) => state.formSlice.guestmail);
  const note = useSelector((state) => state.formSlice.Usernote);



  const day = useSelector((state) => state.date.day);
  const month = useSelector((state) => state.date.month);
  const time = useSelector((state) => state.date.time);
  return (
    <>
      <div className="complete">
        <div className="innercomplete">
          <div className="firstcomplete">
            <span className="tick">
              <TiTickOutline />
            </span>
            <h3>Your event has been scheduled</h3>
            <p>
              You and any other attendees have been emailed with this
              information.
            </p>
          </div>
          <hr />
          <div className="second">
            <h3>What</h3>
            <p>{id === "30min" ? thirtyValue : fifteenValue}</p>
            <h3>When</h3>
            <p>{day},{month}, 2023 | {time} |{countryname}</p>
            <h3>Who</h3>
            <p>
              Subash Budhathoki - Organizer Subashbudhathoki72@gmail.com {name}{" "}
              - Guest
              {guest}
            </p>
            <h3>Where</h3>
            <p>Call Video</p>
            <h3>Additional notes</h3>
            <p>{note}</p>
          </div>
          <hr />

          <div className="third">
            <span>Need to make a change?</span>
            <Link to={`/${id}`}>Reschedule</Link>
            <Link to="/cancel">Cancel</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completepage;
