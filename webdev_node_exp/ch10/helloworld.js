const express = require("express");
const app = express();

// A middleware function
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass the request to the next middleware
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000);
