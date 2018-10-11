#!/usr/bin/env node

const http = require("http");
const request = require("request");

const target = process.env.PROXY_TARGET || "http://localhost:8080";
const delay = process.env.PROXY_DELAY || 0;
const port = process.env.PROXY_PORT || 7000;

const server = http.createServer(function (req, res) {
  setTimeout(function () {
    req.pipe(request(target));
  }, delay);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end();
});
console.log(`Proxying requests to ${target} with a ${delay} ms delay, listening on port ${port}`);
server.listen(port);

