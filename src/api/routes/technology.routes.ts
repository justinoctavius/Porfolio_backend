import { Router } from 'express';

export default function ({ technologyController }) {
  const route = Router();

  route.get('/', (req, res) => technologyController.getAllAsync(req, res));
  route.get('/:tech_id', (req, res) =>
    technologyController.getOneAsync(req, res)
  );
  route.delete('/:tech_id', (req, res) =>
    technologyController.deleteAsync(req, res)
  );
  route.put('/:tech_id', (req, res) =>
    technologyController.updateAsync(req, res)
  );
  route.post('/', (req, res) => technologyController.addAsync(req, res));

  return route;
}
