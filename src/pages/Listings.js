import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Profile.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Listings = () => {
  const [myData, setmyData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => setmyData(response.data));
  }, []);

  return (
    <div>
      <div className="container">
        <p>Listings Details</p>

        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="grid">
              <div className="card" key={id}>
                <h2 className="list-title">{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
