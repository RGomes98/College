import { Routes } from './http/route';
import fastify from 'fastify';

const app = fastify({ logger: true });
const PORT = 3333;

app.register(Routes);

app.listen({ port: PORT }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
