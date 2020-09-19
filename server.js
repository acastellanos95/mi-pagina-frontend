const next = require("next");
const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const httpPort = 80;
const httpsPort = 443;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const options = {
  key: fs.readFileSync(
    "/etc/letsencrypt/live/andrecastellanos.dev/privkey.pem"
  ),
  cert: fs.readFileSync("/etc/letsencrypt/live/andrecastellanos.dev/cert.pem"),
};

app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  http.createServer(server).listen(httpPort);
  https.createServer(options, server).listen(httpsPort);
});
