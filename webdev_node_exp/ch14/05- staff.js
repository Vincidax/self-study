const staff = {
  mitch: {
    name: "Mitch",
    bio: "Mitch is the man to have at your back in a bar fight.",
  },
  madeline: { name: "Madeline", bio: "Madeline is our Oregon expert." },
  walt: { name: "Walt", bio: "Walt is our Oregon Coast expert." },
};
app.get("/staff/:name", (req, res, next) => {
  const info = staff[req.params.name];
  if (!info) return next(); // will eventually fall through to 404
  res.render("05-staffer", info);
});
