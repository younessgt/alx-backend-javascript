const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }

  if (parsedUrl.pathname === '/students') {
    await countStudents(path).then((data) => {
      const { fields, names, length: len } = { ...data };
      let msg2 = '';
      const msg1 = `Number of students: ${len}\n`;
      for (const [key, val] of Object.entries(fields)) {
        const nameString = names[key].join(', ');
        msg2 += `Number of students in ${key}: ${val}. List: ${nameString}\n`;
      }
      const message = msg1 + msg2;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(message.trim());
    }).catch((error) => {
      res.end(error.message);
    });
  }
});

app.listen(port);
module.exports = app;
