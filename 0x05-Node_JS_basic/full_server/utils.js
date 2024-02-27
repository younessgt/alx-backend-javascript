const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const names = {};
      const listLines = data.trim().split('\n').slice(1);
      listLines.forEach((line) => {
        const newList = line.split(',');
        const field = newList.pop();
        names[field] = Object.prototype.hasOwnProperty.call(names, field)
          ? [...names[field], newList[0]]
          : [newList[0]];
      });
      resolve(names);
    });
  });
}

module.exports = readDatabase;
