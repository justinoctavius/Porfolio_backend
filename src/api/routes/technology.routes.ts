import { Router } from 'express';
import { JWTMiddleware } from '../middlewares';

export default function ({ technologyController }) {
  const route = Router();

  route.get('/', (req, res) => technologyController.getAllAsync(req, res));
  route.get('/:tech_id', (req, res) =>
    technologyController.getOneAsync(req, res)
  );
  route.delete('/:tech_id', JWTMiddleware.verifyToken, (req, res) =>
    technologyController.deleteAsync(req, res)
  );
  route.put('/:tech_id', JWTMiddleware.verifyToken, (req, res) =>
    technologyController.updateAsync(req, res)
  );
  route.post('/', JWTMiddleware.verifyToken, (req, res) =>
    technologyController.addAsync(req, res)
  );

  return route;
}
