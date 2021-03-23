import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="container">
      <div className="row search-container">
        <div className="col-md-12 ">
          <h1>Search Book</h1>
          <form>
            <input
              className="search-bar"
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
