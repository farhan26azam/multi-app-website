import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Route } from "react-router-dom";

const Sidebar = () => {
  // Axios API

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  //console.log(screenSize);
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    setDimension();
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, []);

  return screenSize?.dynamicWidth > 900 ? (
    <div className="sidebar">
      <div className="list-group">
        <Link to="settings" className="mini-links">
          <span>
            <p className="side links">
              <img
                width="30"
                src="https://cdn-icons-png.flaticon.com/512/9356/9356612.png"
              ></img>
              Settings
            </p>
          </span>
        </Link>
        <p></p>
        <Link to="profile" className="mini-links">
          <span>
            <p className="side links">
              <img
                width="30"
                src="https://cdn-icons-png.flaticon.com/512/9356/9356425.png"
              ></img>
              Profile
            </p>
          </span>
        </Link>
        <p></p>
        <Link to="message" className="mini-links">
          <span>
            <p className="side links">
              <img
                width="30"
                src="https://cdn-icons-png.flaticon.com/512/9356/9356600.png"
              ></img>
              Message
            </p>
          </span>
        </Link>
        <p></p>
        <Link to="listings" className="mini-links">
          <span>
            <p className="side links">
              <img
                width="30"
                src="https://cdn-icons-png.flaticon.com/512/9356/9356604.png"
              ></img>
              Listings
            </p>
          </span>
        </Link>
        <p></p>
        <Link to="agent" className="mini-links">
          <span>
            <p className="side links">
              <img
                width="30"
                src="https://cdn-icons-png.flaticon.com/128/9356/9356278.png"
              ></img>
              Become an Agent
            </p>
          </span>
        </Link>
      </div>
    </div>
  ) : (
    <div className="sidebarSmall">
      <div className="list-group">
        <Link to="settings" className="mini-links">
          <span>
            <img
              width="30"
              src="https://cdn-icons-png.flaticon.com/512/9356/9356612.png"
            ></img>
          </span>
        </Link>
        <p></p>
        <Link to="profile" className="mini-links">
          <span>
            <img
              width="30"
              src="https://cdn-icons-png.flaticon.com/512/9356/9356425.png"
            ></img>
          </span>
        </Link>
        <p></p>
        <Link to="message" className="mini-links">
          <span>
            <img
              width="30"
              src="https://cdn-icons-png.flaticon.com/512/9356/9356600.png"
            ></img>
          </span>
        </Link>
        <p></p>
        <Link to="listings" className="mini-links">
          <span>
            <img
              width="30"
              src="https://cdn-icons-png.flaticon.com/512/9356/9356604.png"
            ></img>
          </span>
        </Link>
        <p></p>
        <Link to="agent" className="mini-links">
          <span>
            <img
              width="30"
              src="https://cdn-icons-png.flaticon.com/128/9356/9356278.png"
            ></img>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
