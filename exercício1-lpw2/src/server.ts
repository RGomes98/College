import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

const prisma = new PrismaClient();
const app = fastify();
const PORT = 3333;

app.get('/employees', async (request, reply) => {
  return await prisma.employee.findMany();
});

app.get('/ocupations', async (request, reply) => {
  return await prisma.occupation.findMany();
});

app.get('/departments', async (request, reply) => {
  return await prisma.department.findMany();
});

app.listen({ port: PORT }, (err, address) => {
  if (err) throw err;
});
