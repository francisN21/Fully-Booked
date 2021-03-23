const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Scheme for the book based on the readme
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
