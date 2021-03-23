import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./Body.css";

const Body = () => {
  const [userInput, setInput] = useState({
    search: "",
  });

  const onChange = (e) => {
    setInput({ ...userInput, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row search-container">
        <div className="col-md-12 ">
          <h1>Search a book!</h1>
          <form>
            <input
              className="search-bar"
              onChange={onChange}
              name="search"
              type="text"
              placeholder="Search book"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <div className="row">
        <div className="search-results">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
