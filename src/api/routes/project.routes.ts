import { Router } from 'express';

export default function ({ projectController }) {
  const route = Router();

  route.get('/', (req, res) => projectController.getAllAsync(req, res));
  route.get('/:project_id', (req, res) =>
    projectController.getOneAsync(req, res)
  );
  route.post('/:user_id', (req, res) => projectController.addAsync(req, res));
  route.delete('/:project_id', (req, res) =>
    projectController.deleteAsync(req, res)
  );
  route.put('/:project_id', (req, res) =>
    projectController.updateAsync(req, res)
  );

  return route;
}
