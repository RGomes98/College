import { DisciplineController } from '../controllers/DisciplineController';
import { StudentController } from '../controllers/StudentController';
import { GradeController } from '../controllers/GradeController';
import type { FastifyInstance } from 'fastify';

const disciplineController = new DisciplineController();
const studentController = new StudentController();
const gradeController = new GradeController();

export const Routes = async (app: FastifyInstance) => {
  app.get('/listStudents', studentController.list);
  app.post('/createStudent', studentController.create);
  app.get('/listStudentsAverage', studentController.listStudentsAverage);

  app.get('/listDisciplines', disciplineController.list);
  app.post('/createDiscipline', disciplineController.create);

  app.get('/listGrades', gradeController.list);
  app.post('/createGrade', gradeController.create);
};
