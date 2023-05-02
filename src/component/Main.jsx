import React, { useState } from "react";
import Card from "./Card";
import "../assets/style/Main.css";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const thirtyValue = useSelector((state) => state.thirtySlice.thirtyValue);
  const thirty = useSelector((state) => state.thirtySlice.thirty);
  const fifteenValue = useSelector((state) => state.fifteenSlice.fifteenValue);
  const fifteen = useSelector((state) => state.fifteenSlice.fifteen);
  const tpage = useSelector((state) => state.thirtySlice.tpage);
  const fpage = useSelector((state) => state.fifteenSlice.fpage);

  return (
    <>
      <div className="Main">
        <div className="innermain">
          <div>
            <h1>
              Welcome to subash Budhathoki <br /> Dashboard
            </h1>
            <span>React JS | Graphics Designer|</span>
          </div>
          <div className="Multiplecards">
            <Card times={thirtyValue} minute={thirty} page={tpage} />
            <Card times={fifteenValue} minute={fifteen} page={fpage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
