import { EspecialidadeController } from '../controllers/EspecialidadeController';
import { ClienteController } from '../controllers/ClienteController';
import { MedicoController } from '../controllers/MedicoController';
import type { FastifyInstance } from 'fastify';

const especialidadeController = new EspecialidadeController();
const clienteController = new ClienteController();
const medicoController = new MedicoController();

export async function Routes(app: FastifyInstance) {
  app.get('/medicos', medicoController.list);
  app.post('/medicos', medicoController.create);
  app.get('/medico/agendamento', medicoController.listAll);
  app.get('/medico/agendamento/dados', medicoController.listAllDetails);

  app.get('/especialidades', especialidadeController.list);
  app.post('/especialidades', especialidadeController.create);
  app.get('/especialidade/agendamento', especialidadeController.listAll);
  app.get('/especialidade/agendamento/dados', especialidadeController.listAllDetails);

  app.post('/clientes', clienteController.create);
  app.get('/cliente/agendamento', clienteController.listAll);
  app.get('/cliente/agendamento/dados', clienteController.listAllDetails);
}
