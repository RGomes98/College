import { Routes } from './http/routes';
import Fastify from 'fastify';

const fastify = Fastify();
const PORT = 3333;

fastify.register(Routes);

fastify.listen({ port: PORT }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
