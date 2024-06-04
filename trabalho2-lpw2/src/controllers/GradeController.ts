import type { FastifyRequest, FastifyReply } from 'fastify';
import { gradeSchema } from '../lib/schemas';
import { prisma } from '../lib/prisma';

export class GradeController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    const grades = await prisma.grade.findMany();
    return reply.status(200).send(grades);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { student_id, discipline_id, grade_1, grade_2 } = gradeSchema.parse(request.body);
    const grade = await prisma.grade.create({ data: { student_id, discipline_id, grade_1, grade_2 } });
    return reply.status(200).send(grade);
  }
}
