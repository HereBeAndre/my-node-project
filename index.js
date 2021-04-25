// Entry point is specified in package.json (main)
const express = require("express");
const path = require("path");
const hoganMiddleware = require("hogan-middleware");

const PORT = process.env.PORT || 3000;
const app = express();

// Connect views and public folders
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Specify templating engine to handle views
app.set("view engine", "mustache");

// Specify middleware engine to properly handle templating engine
app.engine("mustache", hoganMiddleware.__express);

app.get("/", (req, res, next) => {
  res.send("Hello!");
});

app.get("/json", (req, res, next) => {
  const data = {
    greeting: "Hello there!",
  };
  res.send(data);
});

app.get("/home", (req, res, next) => {
  // 1st argument is the view, 2nd is optional data
  res.render("home", null);
});

app.listen(PORT, () => {
  console.log("Server running on port %d", PORT);
});
