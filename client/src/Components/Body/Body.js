import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./Body.css";

const Body = () => {
  const [userInput, setInput] = useState({
    search: "",
  });

  const [books, setBooks] = useState([]);

  const onChange = (e) => {
    setInput({ ...userInput, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(books);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    let word = userInput.search;
    console.log(word);
    try {
      await API.BookSearch(word).then((result) => {
        console.log(result.data.items);
        setBooks(result.data.items);
      });
    } catch (error) {}
  };
  return (
    <div className="container">
      <div className="row search-container">
        <div className="col-md-12 ">
          <h1>Search a book!</h1>
          <form onSubmit={submit}>
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
        {books.map((book) => (
          <div className="books" key={book.id}>
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <h3>{book.volumeInfo.title}</h3>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-outline-danger">Save Book</button>
                </div>
              </div>
            </div>
            <br />
            <p>{book.volumeInfo.subtitle}</p>
            <p>
              Authors:{" "}
              {book.volumeInfo.authors.map((authors) => (
                <span key={authors}> {authors},</span>
              ))}
            </p>
            <p>{book.volumeInfo.publisher}</p>
            <p>{book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
