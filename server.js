const express = require("express");
const app = express();
const mongoose = require("mongoose");

// for local host or heroku
const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for heroku deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", require("./routes/api-routes"));

// for mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
