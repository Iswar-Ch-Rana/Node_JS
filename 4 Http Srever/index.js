const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: New Request Recived}\n`;
    fs.appendFile('./log.txt', log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("I am Iswar");
                break;
            default:
                res.end("404 Not Found");
                break;
        }
        console.log(err);
    });
});

server.listen(3000, () => {
    console.log("Server Started at 3000");
});