import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./Body.css";
import axios from "axios";

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

  const save = async (query) => {
    let book = {
      title: query.volumeInfo.title,
      authors: query.volumeInfo.authors,
      description: query.volumeInfo.description,
      image: query.volumeInfo.imageLinks.smallThumbnail,
      link: query.volumeInfo.previewLink,
    };
    try {
      console.log(book);
      await axios.post(`/api/book`, book);
      // .then((response) => console.log(response));
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
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => save(book)}
                  >
                    Save Book
                  </button>
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
