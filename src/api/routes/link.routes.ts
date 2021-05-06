import { Router } from 'express';
import { JWTMiddleware } from '../middlewares';

export default function ({ linkController }) {
  const route = Router();

  route.get('/', (req, res) => linkController.getAllAsync(req, res));
  route.get('/:link_id', (req, res) => linkController.getOneAsync(req, res));
  route.post('/:project_id', JWTMiddleware.verifyToken, (req, res) =>
    linkController.addAsync(req, res)
  );
  route.delete('/:link_id', JWTMiddleware.verifyToken, (req, res) =>
    linkController.deleteAsync(req, res)
  );
  route.put('/:link_id', JWTMiddleware.verifyToken, (req, res) =>
    linkController.updateAsync(req, res)
  );

  return route;
}
