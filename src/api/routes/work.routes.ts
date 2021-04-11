import { Router } from 'express';

export default function ({ workController }) {
  const route = Router();

  route.get('/', (req, res) => workController.getAllAsync(req, res));
  route.get('/:work_id', (req, res) => workController.getOneAsync(req, res));
  route.delete('/:work_id', (req, res) => workController.deleteAsync(req, res));
  route.post('/', (req, res) => workController.addAsync(req, res));
  route.put('/', (req, res) => workController.updateAsync(req, res));

  return route;
}
