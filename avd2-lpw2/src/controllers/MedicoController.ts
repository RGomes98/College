import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export class MedicoController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    const medico = await prisma.medico.findMany();
    return reply.status(200).send(medico);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({ medico: z.string(), crm: z.string() });
    const { medico, crm } = bodySchema.parse(request.body);
    const novoMedico = await prisma.medico.create({ data: { medico, crm } });
    return reply.status(200).send(novoMedico);
  }

  async listAll(request: FastifyRequest, reply: FastifyReply) {
    const medicosAgendamentos = await prisma.medico.findMany({
      select: { medico: true, agendamentos: true },
    });

    return reply.status(200).send(medicosAgendamentos);
  }

  async listAllDetails(request: FastifyRequest, reply: FastifyReply) {
    const medicoAgendamentosDetalhes = await prisma.medico.findMany({
      select: {
        crm: true,
        medico: true,
        agendamentos: {
          select: {
            data_consulta: true,
            Cliente: { select: { nome: true, telefone: true } },
            Especialidade: { select: { especialidade: true } },
          },
        },
      },
    });

    return reply.status(200).send(medicoAgendamentosDetalhes);
  }
}
