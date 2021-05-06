import { Router } from 'express';
import { JWTMiddleware } from '../middlewares';

export default function ({ certificateController }) {
  const route = Router();

  route.get('/', (req, res) => certificateController.getAllAsync(req, res));
  route.get('/:certificate_id', (req, res) =>
    certificateController.getOneAsync(req, res)
  );
  route.post('/:study_id', JWTMiddleware.verifyToken, (req, res) =>
    certificateController.addAsync(req, res)
  );
  route.delete('/:certificate_id', JWTMiddleware.verifyToken, (req, res) =>
    certificateController.deleteAsync(req, res)
  );
  route.put('/:certificate_id', JWTMiddleware.verifyToken, (req, res) =>
    certificateController.updateAsync(req, res)
  );

  return route;
}
