// Entry point is specified in package.json (main)

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.send("Hello!");
});

app.get("/json", (req, res, next) => {
  const data = {
    greeting: "Hello there!",
  };

  res.send(data);
});

app.listen(PORT, () => {
  console.log("Server running on port %d", PORT);
});
