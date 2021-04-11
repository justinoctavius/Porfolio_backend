import { Router } from 'express';

export default function ({ userController }) {
  const route = Router();
  console.log(userController.getUserByIdAsync);
  route.post('/', (req, res) => userController.signinAsync(req, res));
  route.get('/:user_id', (req, res) =>
    userController.getUserByIdAsync(req, res)
  );

  return route;
}