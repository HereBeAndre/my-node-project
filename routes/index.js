const express = require("express");
const router = express.Router();

// Handle query parameters
router.get("/names", (req, res) => {
  // Within nodeJS, every request has a query object
  const { name, occupation } = req.query;
  res.json({
    name,
    occupation,
  });
});

// Dynamic data examples
router.get("/:path", (req, res) => {
  // Within nodeJS, every request has a params object
  const path = req.params.path;
  res.json({
    data: path,
  });
});
router.get("/:profile/:username", (req, res) => {
  const { profile, username } = req.params;
  res.json({
    profile,
    username,
  });
});

router.get("/home", (req, res, next) => {
  res.render("home", null);
});

module.exports = router;
