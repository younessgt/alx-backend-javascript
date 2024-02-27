const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
    return;
  }

  if (parsedUrl.pathname === '/students') {
    try {
      const data = await countStudents(path);
      const { fields, names, length: len } = data;
      let msg3 = '';
      const msg1 = 'This is the list of our students';
      const msg2 = `Number of students: ${len}`;
      const storeMsg = [];
      storeMsg.push(msg1, msg2);
      for (const [key, val] of Object.entries(fields)) {
        const nameString = names[key].join(', ');
        msg3 = `Number of students in ${key}: ${val}. List: ${nameString}`;
        storeMsg.push(msg3);
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(storeMsg.join('\n'));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

app.listen(port);
module.exports = app;
