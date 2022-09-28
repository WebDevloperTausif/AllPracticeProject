import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar" >
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/airline">airline</Link>
      </p>
      <p>
        <Link to="/users">users</Link>
      </p>
      <p>
        <Link to="/profiles">Profiles</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Navbar;
