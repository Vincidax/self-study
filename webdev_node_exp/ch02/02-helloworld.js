const http = require("http");
const fs = require("fs");
const path = require("path"); // Added 'path' module
const port = process.env.PORT || 3000;

function serverStaticFile(res, filePath, contentType, responseCode = 200) {
  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    // Used 'path.join' for consistency
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const trimmedPath = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (trimmedPath) {
    case "":
      serverStaticFile(res, "/public/home.html", "text/html"); // Added leading '/' to path
      break;
    case "/about":
      serverStaticFile(res, "/public/about.html", "text/html"); // Added leading '/' to path
      break;
    case "/img/logo.png":
      serverStaticFile(res, "/public/img/logo.png", "image/png"); // Added leading '/' to path
      break;
    default:
      serverStaticFile(res, "/public/404.html", "text/html", 404); // Added leading '/' to path
      break;
  }
});

server.listen(port, () =>
  console.log(
    `Server started on port ${port}; ` + "press Ctrl-C to terminate..."
  )
);
