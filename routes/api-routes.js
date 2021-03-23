const router = require("express").Router();
const db = require("../models");

router.get("/test", (req, res) => {
  res.send({ msg: "success" });
});

router.get("/book", (req, res) => {
  db.Book.find({})
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/book", (req, res) => {
  const savedBook = req.body;
  db.Book.create(savedBook)
    .then((dbBook) => {
      console.log(savedBook), res.json(dbBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
