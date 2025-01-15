app.get("/fifty-fifty", (req, res, next) => {
  if (Math.random() < 0.5) return next();
  res.send("sometimes this");
});
app.get("/fifty-fifty", (req, res) => {
  res.send("and sometimes that");
});
