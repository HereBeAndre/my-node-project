const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello from routes folder!");
});

router.get("/json", (req, res, next) => {
  res.json({
    type: "json",
    data: {
      id: "123456",
      date: "04/25/2021",
      content: "dummy content",
    },
    isValid: true,
  });
});

router.get("/home", (req, res, next) => {
  res.render("home", null);
});

module.exports = router;

// app.get("/json", (req, res, next) => {
//     const data = {
//       greeting: "Hello there!",
//     };
//     res.send(data);
//   });

//   app.get("/home", (req, res, next) => {
//     // 1st argument is the view, 2nd is optional data
//     res.render("home", null);
//   });
