const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers)
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>myyyyyyyyy first</title></head>");
  res.write("<body><h1>nooooodeeehhdhdhd</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(1984);
