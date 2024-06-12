import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

import dayjs from 'dayjs';

export class AgendamentoController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({ data_consulta: z.coerce.date(), data_agendamento: z.coerce.date() });
    const { data_agendamento, data_consulta } = bodySchema.parse(request.body);

    const novoAgendamento = await prisma.agendamento.create({
      data: {
        data_agendamento: dayjs(data_agendamento).toDate(),
        data_consulta: dayjs(data_consulta).toDate(),
      },
    });

    return reply.status(200).send(novoAgendamento);
  }

  async list(request: FastifyRequest, reply: FastifyReply) {
    const agendamentos = await prisma.agendamento.findMany({});
    return reply.status(200).send(agendamentos);
  }
}
