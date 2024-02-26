const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (parsedUrl.pathname === '/students') {
    try {
      const data = await countStudents(path);
      const { fields, names, length: len } = data;
      let msg2 = '';
      const msg1 = `Number of students: ${len}\n`;
      for (const [key, val] of Object.entries(fields)) {
        const nameString = names[key].join(', ');
        msg2 += `Number of students in ${key}: ${val}. List: ${nameString}\n`;
      }
      const message = `This is the list of our students\n${msg1}${msg2}`;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(message.trim());
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
