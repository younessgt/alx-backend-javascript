import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, pathFile) {
    const msg = 'This is the list of our students';
    const msgList = [];
    msgList.push(msg);
    readDatabase(pathFile).then((data) => {
      for (const [key, val] of Object.entries(data)) {
        const msg2 = `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`;
        msgList.push(msg2);
      }
      response.send(200, `${msgList.join('\n')}`);
    }).catch(() => {
      response.send(500, 'Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response, pathFile) {
    const list = ['CS', 'SWE'];
    const { major } = request.params;
    if (!list.includes(major)) {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(pathFile).then((data) => {
        response.send(200, `List: ${data[major].join(', ')}`);
      }).catch(() => {
        response.send(500, 'Cannot load the database');
      });
    }
  }
}

module.exports = StudentsController;
