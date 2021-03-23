const router = require("express").Router();
const db = require("../models");

router.get("/test", (req, res) => {
  console.log(res.json({ msg: "hello world!" }));
});

module.exports = router;
