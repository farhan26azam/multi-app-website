import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const NavbarObject = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Medium
        </Link>
        <Link className="links" to="homepage">
          Our story
        </Link>
        <Link className="links" to="membership">
          Membership
        </Link>
        <Link className="links" to="write">
          Write
        </Link>
        <Link className="links" to="signin">
          Sign In
        </Link>
        <div className="gets">
          <Link className="gets" to="get">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarObject;
