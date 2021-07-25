const http = require('http');
const { brotliDecompressSync } = require('zlib');

let todos = [
  { id: 1, text: 'todo one' },
  { id: 2, text: 'todo two' },
  { id: 3, text: 'todo three' },
  { id: 4, text: 'todo four' },
  { id: 5, text: 'todo five' },
];

const server = http.createServer((request, response) => {
  const { method, url } = request;
  let body = [];
  let finalResponse = {
    success: false,
    data: null,
  };

  request
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      let status = 404;
      if (method === 'GET' && url === '/todos') {
        status = 200;
        finalResponse.data = todos;
        finalResponse.success = true;
      } else if (method === 'POST' && url === '/todos') {
        let { text, id } = JSON.parse(body);

        if (!id || !text) {
          status = 400;
          finalResponse['error'] = 'Request should have id and text';
        } else {
          status = 201;
          todos.push({ id, text });
          finalResponse.data = todos;
          finalResponse.success = true;
        }
      }

      response.writeHead(status, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
      });

      response.end(JSON.stringify(finalResponse));
    });
});

const PORT = 5000;

server.listen(PORT, () =>
  console.log(`server is runnning on the port ${PORT}`)
);
