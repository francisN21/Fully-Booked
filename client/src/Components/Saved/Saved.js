import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Saved.css";

const Saved = () => {
  const [showBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const showSaved = await axios.get(`/api/book`);
        // .then((response) => setBooks(response.data));
        // .then((data) => {
        //   setBooks(data);
        // });
        console.log(showSaved.data);
        setBooks(showSaved.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);
  return (
    <div className="container">
      {showBooks.map((book) => (
        <div className="books" key={book._id}>
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h3>{book.title}</h3>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-outline-danger"
                  // onClick={() => save(book)}
                >
                  Save Book
                </button>
              </div>
            </div>
          </div>
          <br />
          {/* <p>{book.volumeInfo.subtitle}</p> */}
          {/* <p>
            Authors:{" "}
            {book.volumeInfo.authors.map((authors) => (
              <span key={authors}> {authors},</span>
            ))}
          </p> */}
          <p></p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Saved;
