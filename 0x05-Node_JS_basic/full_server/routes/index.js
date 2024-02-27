import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function launchRoutes(app, pathFile) {
  app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });
  app.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res, pathFile);
  });
  app.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res, pathFile);
  });
}

module.exports = launchRoutes;
