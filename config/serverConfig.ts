import express, { Router } from 'express';

export default function (routes) {
  const setRoutes = Router();
  const apiRoutes = Router();

  //middlewares
  apiRoutes.use(express.json());

  console.log('hola putos');

  //routes
  setRoutes.use('/user', routes.userRoute);
  setRoutes.use('/work', routes.workRoute);

  apiRoutes.use('/api', setRoutes);
  return apiRoutes;
}
