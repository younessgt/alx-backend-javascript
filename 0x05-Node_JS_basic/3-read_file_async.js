const fs = require('fs');

/*
// method 1
async function countStudents(path) {
  if (await fs.existsSync(path)) {
    const names = {};
    const fields = {};
    const fileContent = await fs.readFileSync(path, 'utf8');
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
*/
// method 2
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const names = {};
      const fields = {};
      const listLines = data.toString().trim().split('\n');
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
      resolve(data);
    });
  });
}

module.exports = countStudents;
