const http = require("http");
const server = http.createServer((req, res) => {
    
    if(req.url === "/"){

        res.writeHead(200, {"Content-Type" : "text/plain"})
        res.end("/ route is created")

    }else if(req.url === "/home"){

        res.writeHead(200, {"Content-Type" : "text/plain"})
        res.end("Home route is created")

    }else {

        res.writeHead(200, {"Content-Type" : "text/plain"})
        res.end("Out of network")
    }
    
})



server.listen(3000, () => {
    console.log("Server is listening the port 3000");
})













