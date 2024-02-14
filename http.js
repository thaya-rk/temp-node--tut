const http = require("http")
const server =http.createServer((req,res) =>{
    if(req.url == '/'){
        res.end("Welcome to home page")
    }
    if(req.url == "/about"){
        res.end("This is about us page");
    }
    res.end(`
    <h1>Oops</h1>
    <p>This page is not available</p>
    <a href="/">back home</a>`)


})
server.listen(5000)