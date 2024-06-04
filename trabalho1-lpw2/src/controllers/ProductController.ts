import { validGroups, ParamsSchema, GroupSchema } from '../lib/schemas';
import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';

export class ProductController {
  async list(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send(await prisma.product.findMany());
  }

  async listById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = ParamsSchema.parse(request.params);
    return reply.status(200).send(await prisma.product.findFirstOrThrow({ where: { id } }));
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { amount, price_unit, group_name, product_name } = GroupSchema.parse(request.body);
    if (!validGroups.includes(group_name)) return reply.status(400).send('Grupo inválido.');

    const isProductAlreadyRegistered = await prisma.product.findFirst({ where: { product_name } });
    if (isProductAlreadyRegistered) return reply.status(409).send('Produto já cadastrado.');

    const product = await prisma.product.create({ data: { amount, price_unit, group_name, product_name } });
    return reply.status(200).send(product);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = ParamsSchema.parse(request.params);
    await prisma.product.findFirstOrThrow({ where: { id } });
    await prisma.product.delete({ where: { id } });
    return reply.status(200).send('Produto deletado com sucesso.');
  }

  async modify(request: FastifyRequest, reply: FastifyReply) {
    const { amount, price_unit, group_name, product_name } = GroupSchema.parse(request.body);
    const { id } = ParamsSchema.parse(request.params);

    const product = await prisma.product.findFirstOrThrow({ where: { id } });
    if (!validGroups.includes(group_name)) return reply.status(400).send('Grupo inválido.');

    if (product_name !== product.product_name) {
      const isProductAlreadyRegistered = await prisma.product.findFirst({ where: { product_name } });
      if (isProductAlreadyRegistered) return reply.status(409).send('Produto já cadastrado.');
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { amount, price_unit, group_name, product_name },
    });

    return reply.status(200).send(updatedProduct);
  }
}
