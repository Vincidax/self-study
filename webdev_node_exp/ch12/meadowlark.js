const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const cluster = require("cluster");

const credentials = require("./credentials");
const handlers = require("./lib/handlers");
const weatherMiddlware = require("./lib/middleware/weather");
const flashMiddleware = require("./lib/middleware/flash");

const app = express();

// configure Handlebars view engine
app.engine(
  "handlebars",
  expressHandlebars({
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser(credentials.cookieSecret));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
  })
);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(weatherMiddlware);
app.use(flashMiddleware);

app.use((req, res, next) => {
  if (cluster.isWorker)
    console.log(`Worker ${cluster.worker.id} received request`);
  next();
});

app.get("/", handlers.home);

// handlers for browser-based form submission
app.get("/newsletter-signup", handlers.newsletterSignup);
app.post("/newsletter-signup/process", handlers.newsletterSignupProcess);
app.get("/newsletter-signup/thank-you", handlers.newsletterSignupThankYou);
app.get("/newsletter-archive", handlers.newsletterSignupThankYou);

app.get("/fail", (req, res) => {
  throw new Error("Nope!");
});
app.use((err, req, res, next) => {
  console.error(err.message, err.stack);
  app.status(500).render("500");
});
app.use(handlers.notFound);
app.use(handlers.serverError);

function startServer(port) {
  app.listen(port, function () {
    console.log(
      `Express started in ${app.get("env")} ` +
        `mode on http://localhost:${port}` +
        `; press Ctrl-C to terminate.`
    );
  });
}

if (require.main === module) {
  // application run directly; start app server
  startServer(process.env.PORT || 3000);
} else {
  //application imported as a module via 'require': export
  //function to create server
  module.exports = startServer;
}
