const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const names = {};
    const fields = {};
    const fileContent = fs.readFileSync(path, 'utf8');
    const listLines = fileContent.toString().trim().split('\n');
    console.log(`Number of students: ${listLines.length - 1}`);

    listLines.slice(1).forEach((str) => {
      const newList = str.split(',');
      const field = newList.pop();
      fields[field] = Object.prototype.hasOwnProperty.call(fields, field) ? fields[field] + 1 : 1;
      names[field] = Object.prototype.hasOwnProperty.call(names, field)
        ? [...names[field], newList[0]]
        : [newList[0]];
    });
    for (const [key, val] of Object.entries(fields)) {
      const nameString = names[key].join(', ');
      console.log(`Number of students in ${key}: ${val}. List: ${nameString}`);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
