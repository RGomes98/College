import { validCities, ParamsSchema, UserSchema } from '../lib/schemas';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';

export class UserController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send(await prisma.user.findMany());
  }

  async listById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = ParamsSchema.parse(request.params);
    return reply.status(200).send(await prisma.user.findFirstOrThrow({ where: { id } }));
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { cpf, city, name, email } = UserSchema.parse(request.body);
    if (!validCities.includes(city)) return reply.status(400).send('Cidade inválida.');

    const isEmailAlreadyRegistered = await prisma.user.findFirst({ where: { email } });
    if (isEmailAlreadyRegistered) return reply.status(409).send('E-mail já cadastrado.');

    const isCPFAlreadyRegistered = await prisma.user.findFirst({ where: { cpf } });
    if (isCPFAlreadyRegistered) return reply.status(409).send('CPF já cadastrado.');

    const user = await prisma.user.create({ data: { cpf, city, name, email } });
    return reply.status(200).send(user);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = ParamsSchema.parse(request.params);
    await prisma.user.findFirstOrThrow({ where: { id } });
    await prisma.user.delete({ where: { id } });
    return reply.status(200).send('Usuário deletado com sucesso.');
  }

  async modify(request: FastifyRequest, reply: FastifyReply) {
    const { cpf, city, name, email } = UserSchema.parse(request.body);
    const { id } = ParamsSchema.parse(request.params);

    const user = await prisma.user.findFirstOrThrow({ where: { id } });
    if (!validCities.includes(city)) return reply.status(400).send('Cidade inválida.');

    if (email !== user.email) {
      const isEmailAlreadyRegistered = await prisma.user.findFirst({ where: { email } });
      if (isEmailAlreadyRegistered) return reply.status(409).send('E-mail já cadastrado.');
    }

    if (cpf !== user.cpf) {
      const isCPFAlreadyRegistered = await prisma.user.findFirst({ where: { cpf } });
      if (isCPFAlreadyRegistered) return reply.status(409).send('CPF já cadastrado.');
    }

    const updatedUser = await prisma.user.update({ where: { id }, data: { cpf, city, name, email } });
    return reply.status(200).send(updatedUser);
  }
}
