import { OrderController } from '../controllers/OrderController';
import type { FastifyInstance } from 'fastify';

const orderController = new OrderController();

export const Routes = async (fastify: FastifyInstance) => {
  fastify.get('/pedidos', orderController.listOrders);
  fastify.get('/totaispedidos', orderController.listOrdersTotal);
};
