import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar ">
          <Link to="/"style={{ textDecoration: 'none', color: 'black' ,fontSize:"1.5rem"}}>Home</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
