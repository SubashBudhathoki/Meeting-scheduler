import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillStopwatchFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiOutlineDown } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/style/Minutepage.css";
import axios from "axios";
import {
  setdate,
  setcountryhour,
  setday,
  setmonth,
  settime,
  setcountryname,
} from "../reduce/combine/calenderSlice";
import { twelveHourFormat } from "../utils/Time";
import { twentyFourFormat } from "../utils/Time";
import my from "../assets/images/my.jpg";

const Minutepage = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const handlepage = (item) => {
    dispatch(settime(item));
    id == "30min" && navigate("/details/30min");
    id == "15min" && navigate("/details/15min");
  };

  const thirtyValue = useSelector((state) => state.thirtySlice.thirtyValue);
  const fifteenValue = useSelector((state) => state.fifteenSlice.fifteenValue);
  const calendardate = useSelector((state) => state.date.newdate);
  const countryhour = useSelector((state) => state.date.countryhour);
  const countryname = useSelector((state) => state.date.countryname);

  const dispatch = useDispatch();

  console.log(countryhour);
  console.log("from calendar", calendardate);

  const [newDimensionArray, setnewDimensionArray] = useState(null);

  const fairdate = new Date(calendardate);

  const day = fairdate.toLocaleDateString("en-US", { weekday: "long" });

  console.log(day);
  const month = fairdate.toLocaleDateString("en-US", { month: "long" });

  const currentDate = new Date();
  console.log(currentDate.getDate())
  useEffect(() => {
    const fairdate = new Date(calendardate);
    const val = fairdate.getDay();
    const month = fairdate.getMonth();
    console.log(val, month);
    console.log(currentDate.getDate(), currentDate.getMonth());
    if (
      calendardate !== "" &&
      currentDate.getDay() == val &&
      currentDate.getMonth() == month
    ) {
      setnewDimensionArray(
        twentyFourFormat.thirty.filter((item) => {
          console.log(countryhour);
          return parseInt(item) > countryhour + 1;
        })
      );
    } else {
      setnewDimensionArray(null);
    }
    console.log(newDimensionArray);
  }, [calendardate]);
  console.log(newDimensionArray);

  const [togglevalue, settogglevalue] = useState(true);
  const [apicall, setapicall] = useState([]);
  const toggle = () => {
    settogglevalue(!togglevalue);
  };
  const viewcalendar = (args) => {
    dispatch(setdate(args));
    console.log("asdf", args);
    const date = new Date(args);
    console.log(date)
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "long" });

    dispatch(setday(day));
    dispatch(setmonth(month));
  };
  const [rightdivtoggle, setrightdivtoggle] = useState(false);
  const showrightdiv = () => {
    setrightdivtoggle(true);
  };

  const [timeToggle, settimeToggle] = useState(false);
  const current = new Date();
  const dateDisable = ({ date }) => {
    if (date.getDay() === 0) {
      return true;
    }
  };

  const changecountrytime = (e) => {
    console.log(e.target.value);
    dispatch(setcountryname(e.target.value));
  };

  useEffect(() => {
    axios
      .get(`http://worldtimeapi.org/api/timezone/${countryname}`)
      .then((res) => {
        console.log(res.data.datetime);
        const isoString = res.data.datetime;
        const hours = parseInt(isoString.substring(11, 13), 10);
        dispatch(setcountryhour(hours));
        console.log(countryhour);
      });
  }, [countryname]);

  const [dates, setDate] = useState(new Date()); // initialize state with current date

  function handleDateChange(newDate) {
    setDate(newDate);
  }

  useEffect(() => {
    axios.get("http://worldtimeapi.org/api/timezone").then((res) => {
      setapicall(res.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div className="mainbox">
        <div className="box">
          <div className="box-1">
            <div>
              <img src={my} alt="" className="logoimg" />
            </div>
            <span>Subash Budhathoki</span>
            <h3 style={{ fontSize: "0.8rem" }}>
              {id === "30min" ? thirtyValue : fifteenValue}
            </h3>
            <div className="meetingshedule">
              <span>
                <BsFillCameraVideoFill /> Call Video
              </span>
              <span>
                <BsFillStopwatchFill /> {id === "30min" ? "30 Min" : "15 Min"}
              </span>

              <span className="videosetting">
                <select
                  name=""
                  style={{ width: "100%", height: "2rem" }}
                  onChange={changecountrytime}
                >
                  <option value="Select TimeZone">Select TimeZone</option>
                  {apicall.map((timezone, id) => (
                    <option value={timezone} key={id}>
                      {timezone}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>
          <div className="box-2">
            <Calendar
              onChange={viewcalendar}
              onClickDay={showrightdiv}
              minDate={current}
              tileDisabled={dateDisable}
            />
          </div>

          {rightdivtoggle &&
            (id == "30min" ? (
              <div className="box-btn">
                <div className="btn-hh">
                  <span>
                    {day}/{month}/{fairdate.getFullYear()}
                  </span>
                  <div className="twobtn">
                    <button
                      style={{ width: "50%" }}
                      onClick={() => {
                        settimeToggle(true);
                      }}
                    >
                      24
                    </button>
                    <button
                      style={{ width: "50%" }}
                      onClick={() => {
                        settimeToggle(false);
                      }}
                    >
                      12
                    </button>
                  </div>
                </div>
                <div className="BTN">
                  {newDimensionArray === null &&
                    (!timeToggle
                      ? twelveHourFormat
                      : twentyFourFormat
                    ).thirty.map((items) => (
                      <button
                        onClick={() => {
                          handlepage(items);
                        }}
                        className="box-btn-inside"
                      >
                        {items}
                      </button>
                    ))}
                  {newDimensionArray !== null &&
                    newDimensionArray.map((items) => (
                      <button
                        onClick={() => {
                          handlepage(items);
                        }}
                        className="box-btn-inside"
                      >
                        {items}
                      </button>
                    ))}
                </div>
              </div>
            ) : (
              <div className="box-btn">
                <div className="btn-hh">
                  <span>
                    {day}/{month}/{fairdate.getFullYear()}
                  </span>
                  <div className="twobtn">
                    <button
                      style={{ width: "50%" }}
                      onClick={() => {
                        settimeToggle(true);
                      }}
                    >
                      24
                    </button>
                    <button
                      style={{ width: "50%" }}
                      onClick={() => {
                        settimeToggle(false);
                      }}
                    >
                      12
                    </button>
                  </div>
                </div>
                <div className="BTN">
                {newDimensionArray === null &&
                    (!timeToggle
                      ? twelveHourFormat
                      : twentyFourFormat
                    ).fifteen.map((items) => (
                      <button
                        onClick={() => {
                          handlepage(items);
                        }}
                        className="box-btn-inside"
                      >
                        {items}
                      </button>
                    ))}
                  {newDimensionArray !== null &&
                    newDimensionArray.map((items) => (
                      <button
                        onClick={() => {
                          handlepage(items);
                        }}
                        className="box-btn-inside"
                      >
                        {items}
                      </button>
                    ))}

                 
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Minutepage;

{
  /* <button style={{ border: "none" }} onClick={toggle}>
              <TbWorld />
              Asia/Kathmandu
              <AiOutlineDown />
              {togglevalue ? (
                <div></div>
              ) : (
                <div>
                  <div>
                    <h4>Time Option</h4>
                    <select name="" id="">
                      <option value="Select TimeZone">Select TimeZone</option>
                      {baseURL.map((timezone) => (
                        <option value="">{timezone}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </button> */
}
