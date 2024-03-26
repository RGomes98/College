import { ProductionOrderController } from '../controllers/ProductionOrderController';
import type { FastifyInstance } from 'fastify';

const productionOrderController = new ProductionOrderController();

export const Routes = async (fastify: FastifyInstance) => {
  fastify.get('/ops', productionOrderController.listProductionOrders);
};
