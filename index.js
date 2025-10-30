const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.end("homePage");
});

app.get("/about", (req, res) => {
  return res.end("aboutPage");
});

app.listen(8000, () => {
  console.log("server started");
});

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.url} New req received\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (req.url) {
//       case "/":
//         res.end("homePage");
//         break;
//       case "/about":
//         res.end("aboutPage");
//         break;
//       default:
//         res.end("404 not found");
//     }
//     // res.end("Hello from server");
//   });
// });

// myServer.listen(8000, () => {
//   console.log("Server Started!!");
// });
