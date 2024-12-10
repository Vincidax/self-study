app.use((req, res, next) => {
  console.log(`processing request for ${req.url}....`);
});
app.use((req, res, next) => {
  console.log(`terminating request`);
  res.send("thanks for playing!");
  // note that we do NOT call next() here...this terminates the request
});
app.use((req, res, next) => {
  console.log(`whoops, i'll never get called!`);
});
