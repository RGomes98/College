import type { FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma';

export class OrderController {
  async listOrders(request: FastifyRequest, reply: FastifyReply) {
    const orders = await prisma.order.findMany();
    return reply.status(200).send(orders);
  }

  async listOrdersTotal(request: FastifyRequest, reply: FastifyReply) {
    const orders = await prisma.order.findMany();

    const ordersTotal = orders.map(({ product, amount, price_unit }) => {
      return {
        product_code: product,
        product_amount: amount,
        product_price_unit: price_unit,
        product_price_total: Number(price_unit) * amount,
      };
    });

    return reply.status(200).send(ordersTotal);
  }
}
