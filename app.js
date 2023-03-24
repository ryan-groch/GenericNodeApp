const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Generic Node App</h1>");
});

app.listen(5000, () => {
  console.log("App is listening on port 5000...");
});