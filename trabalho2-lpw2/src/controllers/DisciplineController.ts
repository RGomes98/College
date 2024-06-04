import type { FastifyRequest, FastifyReply } from 'fastify';
import { disciplineSchema } from '../lib/schemas';
import { prisma } from '../lib/prisma';

const validDisciplines = ['LPWII', 'PMI', 'PMII'];

export class DisciplineController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    const disciplines = await prisma.discipline.findMany();
    return reply.status(200).send(disciplines);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { code, name, workload } = disciplineSchema.parse(request.body);
    if (!validDisciplines.includes(code)) return reply.status(400).send('Código da disciplina inválida.');

    const isDisciplineAlreadyCreated = await prisma.discipline.findFirst({ where: { code } });
    if (isDisciplineAlreadyCreated) return reply.status(400).send('Disciplina já registrada.');

    const discipline = await prisma.discipline.create({ data: { code, name, workload } });
    return reply.status(200).send(discipline);
  }
}
