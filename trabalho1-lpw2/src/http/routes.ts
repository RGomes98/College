import { ProductController } from '../controllers/ProductController';
import { UserController } from '../controllers/UserController';
import type { FastifyInstance } from 'fastify';

const productController = new ProductController();
const userController = new UserController();

export const Routes = async (fastify: FastifyInstance) => {
  fastify.get('/users', userController.list);
  fastify.get('/users/:id', userController.listById);
  fastify.post('/users/create', userController.create);
  fastify.put('/users/modify/:id', userController.modify);
  fastify.delete('/users/delete/:id', userController.delete);

  fastify.get('/products', productController.list);
  fastify.get('/products/:id', productController.listById);
  fastify.post('/products/create', productController.create);
  fastify.put('/products/modify/:id', productController.modify);
  fastify.delete('/products/delete/:id', productController.delete);
};
