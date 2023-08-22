// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write a response to the client
  res.end('Hello, Node.js Server!');
});

// Define the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
