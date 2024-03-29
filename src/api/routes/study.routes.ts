import { Router } from 'express';
import { JWTMiddleware } from '../middlewares';

export default function ({ studyController }) {
  const route = Router();

  route.get('/', (req, res) => studyController.getAllAsync(req, res));
  route.get('/:study_id', (req, res) => studyController.getOneAsync(req, res));
  route.post('/:user_id', JWTMiddleware.verifyToken, (req, res) =>
    studyController.addAsync(req, res)
  );
  route.delete('/:study_id', JWTMiddleware.verifyToken, (req, res) =>
    studyController.deleteAsync(req, res)
  );
  route.put('/:study_id', JWTMiddleware.verifyToken, (req, res) =>
    studyController.updateAsync(req, res)
  );

  return route;
}
