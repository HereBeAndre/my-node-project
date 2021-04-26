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

// Apply middleware before require and use -
// All following routes will receive timestamp inside res
app.use((req, res, next) => {
  const timestamp = new Date();
  req.timestamp = timestamp.toString();
  next(); // Without it function would remain hanging
});

const index = require("./routes/index");
const register = require("./routes/register");

app.use("/", index);
app.use("/register", register);

app.listen(PORT, () => {
  console.log("Server running on port %d", PORT);
});
