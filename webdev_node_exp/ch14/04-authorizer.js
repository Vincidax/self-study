function authorize(req, res, next) {
  if (req.session.authorized) return next();
  res.render("not-authorized");
}
app.get("/public", () => res.render("public"));
app.get("/secret", authorize, () => res.render("secret"));
