import { Routes } from './http/routes';
import Fastify from 'fastify';

const fastify = Fastify({ logger: true });
const PORT = 3334;

fastify.register(Routes);

fastify.listen({ port: PORT }, (err, _) => {
  if (err) throw err;
  console.log(`Server is now listening on ${PORT}`);
});
