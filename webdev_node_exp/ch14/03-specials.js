async function specials(req, res, next) {
  res.locals.special = await getSpecialsFromDatabase();
  next();
}

app.get("/page-with-specials", specials, (req, res) =>
  res.render("page-with-specials")
);
