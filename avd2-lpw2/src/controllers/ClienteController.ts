import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export class ClienteController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const clienteSchema = z.object({ cpf: z.string(), nome: z.string(), telefone: z.string() });
    const { cpf, nome, telefone } = clienteSchema.parse(request.body);

    const isClientAlreadyRegistered = await prisma.cliente.findFirst({ where: { cpf } });

    if (isClientAlreadyRegistered) {
      return reply.status(400).send('Cliente já cadastrado!');
    }

    const cliente = await prisma.cliente.create({ data: { cpf, nome, telefone } });
    return cliente;
  }

  async listAll(request: FastifyRequest, reply: FastifyReply) {
    const clienteAgendamentos = await prisma.cliente.findMany({
      select: { nome: true, cpf: true, telefone: true, agendamentos: true },
    });

    return reply.status(200).send(clienteAgendamentos);
  }

  async listAllDetails(request: FastifyRequest, reply: FastifyReply) {
    const clienteAgendamentosDetalhes = await prisma.cliente.findMany({
      select: {
        nome: true,
        telefone: true,
        agendamentos: {
          select: {
            data_consulta: true,
            data_agendamento: true,
            Medico: { select: { medico: true } },
            Especialidade: { select: { especialidade: true } },
          },
        },
      },
    });

    return reply.status(200).send(clienteAgendamentosDetalhes);
  }
}
