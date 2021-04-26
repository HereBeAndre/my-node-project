const express = require("express");
const router = express.Router();

// START: Handle query parameters
router.get("/names", (req, res) => {
  // Within nodeJS, every request has a query object
  const { name, occupation } = req.query;

  const data = {
    name,
    occupation,
  };

  res.render("profile", data);
});
// END: Handle query parameters

// START: Dynamic data examples
// router.get("/:path", (req, res) => {
//   // Within nodeJS, every request has a params object
//   const path = req.params.path;
//   res.json({
//     data: path,
//   });
// });

router.get("/:dynamic1/:dynamic2", (req, res) => {
  const { dynamic1, dynamic2 } = req.params;
  const dynamicData = {
    dynamic1,
    dynamic2,
  };
  res.render("dynamic", dynamicData);
});
// END: Dynamic data examples

router.get("/home", (req, res, next) => {
  res.render("home", null);
});

module.exports = router;
