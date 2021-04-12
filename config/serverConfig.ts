import express, { Router } from 'express';

export default function (routes) {
  const setRoutes = Router();
  const apiRoutes = Router();

  //middlewares
  apiRoutes.use(express.json());

  //routes
  setRoutes.use('/user', routes.userRoute);
  setRoutes.use('/work', routes.workRoute);
  setRoutes.use('/study', routes.studyRoute);

  apiRoutes.use('/api', setRoutes);
  return apiRoutes;
}
