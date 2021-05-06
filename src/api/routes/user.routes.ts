import { Router } from 'express';
import { UserMiddleware } from '../middlewares';

export default function ({ userController }) {
  const route = Router();
  route.post('/', (req, res) => userController.signinAsync(req, res));
  route.get('/:user_id', (req, res) =>
    userController.getUserByIdAsync(req, res)
  );
  route.get('/', UserMiddleware.getUserByToken, (req, res) =>
    userController.getUserByIdAsync(req, res)
  );
  return route;
}
