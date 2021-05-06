import { Router } from 'express';
import { JWTMiddleware } from '../middlewares';

export default function ({ workController }) {
  const route = Router();

  route.get('/', (req, res) => workController.getAllAsync(req, res));
  route.get('/:work_id', (req, res) => workController.getOneAsync(req, res));
  route.delete('/:work_id', JWTMiddleware.verifyToken, (req, res) =>
    workController.deleteAsync(req, res)
  );
  route.put('/:work_id', JWTMiddleware.verifyToken, (req, res) =>
    workController.updateAsync(req, res)
  );
  route.post('/:user_id', JWTMiddleware.verifyToken, (req, res) =>
    workController.addAsync(req, res)
  );

  return route;
}
