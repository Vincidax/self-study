const express = require("express");
const { engine } = require("express-handlebars"); // Update this line
const fortune = require("./lib/fortune");
const handlers = require("./lib/handlers");

const app = express();
const port = process.env.PORT || 3000;

// Configure handlebars view engine
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    helpers: {
      section: function (name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
    },
  })
);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", handlers.home);

app.get("/about", handlers.about);

// custom 404 page
app.use(handlers.notFound);

// custom 500 page
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () =>
    console.log(
      `Express started on http://localhost:${port} ` +
        "press Ctrl-C to terminate."
    )
  );
} else {
  module.exports = app;
}
