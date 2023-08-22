var http = require("http");
var port = 2000;

var server = http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, { "content-Type": 'text/plain' })
        res.write("hello world Node js")
        res.end();
    }

    else if (req.url == "/aboutus") {
        res.writeHead(200, { "content-Type": 'text/html' })
        res.write("<h1>About us page <h1>");
        res.end();
    }

    else if (req.url == "/contactus") {
        res.writeHead(200, { "content-Type": 'text/html' })
        res.write("<h2>Contact us<h2>")
        res.end();
    }
});

server.listen(port);
console.log(`Server started with port ${port}`);

