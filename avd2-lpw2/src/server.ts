import { Routes } from './http/routes';
import fastify from 'fastify';

const app = fastify();
app.register(Routes);

app.listen({ port: 3333 }).then(() => console.log('Servidor rodando na porta 3333'));
