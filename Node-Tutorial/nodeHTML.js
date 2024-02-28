//creating http server
const http = require('http');
const {readFileSync} = require('fs')

const page = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    try {
        if (req.url == '/') {
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.write(page);
            res.end();      
        } else if (req.url == '/about') {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('<h1>This is about page</h1>');
            res.end();
        } else {
            res.writeHead(404, { 'content-type': 'text/html' }); 
            res.write('<h1>Page not found</h1>');
            res.end();
        }
    } 
    catch (error) {
        console.error('An error occurred:', error);
        res.writeHead(500, { 'content-type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
    }
});
    //set port and start server
server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
