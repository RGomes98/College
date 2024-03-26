import { Routes } from './http/routes';
import Fastify from 'fastify';

const fastify = Fastify();
fastify.register(Routes);
const PORT = 3333;

fastify.listen({ port: PORT }, (err, _) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}.`);
});
