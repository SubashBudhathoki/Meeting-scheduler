import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
