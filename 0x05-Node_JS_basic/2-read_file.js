const fs = require('fs');

function countStudents(path) {
  if (fs.existsSync(path)) {
    const names = {};
    const fields = {};
    const fileContent = fs.readFileSync(path, 'utf8');
    const listLines = fileContent.toString().trim().split('\n');
    console.log(`Number of students: ${listLines.length - 1}`);
    listLines.shift();
    listLines.forEach((str) => {
      const newList = str.split(',');
      const field = newList.pop();
      fields.hasOwnProperty(field) ? fields[field] += 1 : fields[field] = 1;
      names.hasOwnProperty(field) ? names[field].push(newList[0]) : names[field] = [newList[0]];
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
