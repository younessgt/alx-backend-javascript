const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const msg = 'This is the list of our students\n';
  countStudents(database).then((data) => {
    res.send(`${msg}${data.join('\n')}`);
  }).catch((error) => {
    res.send(`${msg}${error.message}`);
  });
});
app.listen(port);
module.exports = app;
