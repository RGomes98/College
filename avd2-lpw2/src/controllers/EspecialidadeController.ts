import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export class EspecialidadeController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    const medico = await prisma.especialidade.findMany();
    return reply.status(200).send(medico);
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const especialidadeSchema = z.object({ cod_especialidade: z.string(), especialidade: z.string() });
    const { especialidade, cod_especialidade } = especialidadeSchema.parse(request.body);

    const isSpecialtieAlreadyRegistered = await prisma.especialidade.findFirst({
      where: { cod_especialidade },
    });

    if (isSpecialtieAlreadyRegistered) {
      return reply.status(400).send('Especialidade já cadastrada!');
    }

    const novaEspecialidade = await prisma.especialidade.create({
      data: { cod_especialidade, especialidade },
    });

    return reply.status(200).send(novaEspecialidade);
  }

  async listAll(request: FastifyRequest, reply: FastifyReply) {
    const especialidadeAgendamentos = await prisma.especialidade.findMany({
      select: { especialidade: true, agendamentos: true },
    });

    return reply.status(200).send(especialidadeAgendamentos);
  }

  async listAllDetails(request: FastifyRequest, reply: FastifyReply) {
    const especialidadeAgendamentosDetalhes = await prisma.especialidade.findMany({
      select: {
        especialidade: true,
        agendamentos: {
          select: {
            data_consulta: true,
            data_agendamento: true,
            Medico: { select: { medico: true } },
            Cliente: { select: { nome: true, telefone: true } },
          },
        },
      },
    });

    return reply.status(200).send(especialidadeAgendamentosDetalhes);
  }
}
