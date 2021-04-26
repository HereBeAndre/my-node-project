const express = require("express");
const router = express.Router();

router.post("/new-user", (req, res) => {
  const { body } = req;
  res.render("home", body);
});

module.exports = router;
