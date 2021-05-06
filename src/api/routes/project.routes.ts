import { Router } from 'express';
import { JWTMiddleware } from '../middlewares';

export default function ({ projectController }) {
  const route = Router();

  route.get('/', (req, res) => projectController.getAllAsync(req, res));
  route.get('/:project_id', (req, res) =>
    projectController.getOneAsync(req, res)
  );
  route.post('/:user_id', JWTMiddleware.verifyToken, (req, res) =>
    projectController.addAsync(req, res)
  );
  route.delete('/:project_id', JWTMiddleware.verifyToken, (req, res) =>
    projectController.deleteAsync(req, res)
  );
  route.put('/:project_id', JWTMiddleware.verifyToken, (req, res) =>
    projectController.updateAsync(req, res)
  );

  return route;
}
