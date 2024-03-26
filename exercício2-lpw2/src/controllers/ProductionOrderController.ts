import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';

export class ProductionOrderController {
  async listProductionOrders(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send(await prisma.oP.findMany());
  }
}
