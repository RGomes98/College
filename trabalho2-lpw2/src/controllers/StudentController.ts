import type { FastifyRequest, FastifyReply } from 'fastify';
import { studentSchema } from '../lib/schemas';
import { prisma } from '../lib/prisma';

type StudentsAverage = {
  student: string;
  average: number;
  grade_1: number;
  grade_2: number;
  discipline: string;
  status: 'Aprovado' | 'Reprovado';
};

export class StudentController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    const students = await prisma.student.findMany();
    return reply.status(200).send(students);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = studentSchema.parse(request.body);
    const student = await prisma.student.create({ data: { name, email } });
    return reply.status(200).send(student);
  }

  async listStudentsAverage(request: FastifyRequest, reply: FastifyReply) {
    const students = await prisma.student.findMany({
      include: { Grade: { include: { student: true, discipline: true } } },
    });

    const studentsAverage = students.reduce<StudentsAverage[]>((studentsAverage, { Grade: grades }) => {
      const studentGrades = grades.map(
        ({ grade_1, grade_2, student: { name: studentName }, discipline: { name: disciplineName } }) => {
          const studentAverage = (Number(grade_1) + Number(grade_2)) / 2;

          return {
            student: studentName,
            average: studentAverage,
            grade_1: Number(grade_1),
            grade_2: Number(grade_2),
            discipline: disciplineName,
            status: studentAverage >= 6 ? ('Aprovado' as const) : ('Reprovado' as const),
          };
        }
      );

      studentsAverage.push(...studentGrades);
      return studentsAverage;
    }, []);

    return reply.status(200).send(studentsAverage);
  }
}
