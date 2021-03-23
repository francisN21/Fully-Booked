const contentDisposition = require("content-disposition");

const router = require("express").Router();

router.get("/test", (req, res) => {
  console.log(res.json({ msg: "hello world!" }));
});

module.exports = router;
