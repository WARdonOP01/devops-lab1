const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end(`
    <h1>DevOps Lab 1</h1>
    <h2>CI/CD Pipeline Working Successfully!</h2>
    <p>Student: Om Prajapati</p>
  `);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Application running on port 3000');
});
