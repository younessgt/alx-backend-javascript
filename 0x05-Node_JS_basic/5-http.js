const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (parsedUrl.pathname === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(path);
      res.end(data.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

app.listen(port);
module.exports = app;
