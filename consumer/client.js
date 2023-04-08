const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var url = "http://provider:1234/"; //Ihre Aufgabe

  http
    .get(url, (apiRes) => {
      var body = "";

      apiRes.on("data", function (chunk) {
        body += chunk;
      });

      apiRes.on("end", function () {
        var jokeJSON = JSON.parse(body);

        let html =
          "<!doctype html><html><head><title>M347 Joke Consumer></title></head>";
        html +=
          "<body><h1>M347 Funny Joke</h1><p>" +
          jokeJSON.joke +
          "</p></body></html>";
        res.end(html);
      });
    })
    .on("error", function (e) {
      console.log("Got an error: ", e);
    });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
