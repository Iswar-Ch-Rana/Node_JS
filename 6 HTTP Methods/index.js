// GET -> When We want some data form the servere Browser By default send the get request, 
// POST -> When You want to send the data and mutate some data in server ,
// PUT -> puting some data ,
// PATCH -> Change the data in data base,
// DELETE -> delte this,


const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Recived\n`;
    const MyUrl = url.parse(req.url, true);
    
    fs.appendFile('./log.txt', log, (err, data) => {

        switch (MyUrl.pathname) {
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                const userName = MyUrl.query.name;
                res.end(`Hi ${userName}`);
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
