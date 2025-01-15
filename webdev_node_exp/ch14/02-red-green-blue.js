app.get(
  "/rgb",
  (req, res, next) => {
    //about a third of the requests will return "red"
    if (Math.random() < 0.33) return next();
    res.send("red");
  },
  (req, res, next) => {
    //half of the remaining 2/3 of requests (so another third)
    // will return "green"
    res.send("green");
  },
  function (req, res) {
    // and the last third returns "blue"
    res.send("blue");
  }
);
