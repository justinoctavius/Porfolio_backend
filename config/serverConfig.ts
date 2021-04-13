import express, { Router } from 'express';

export default function (routes) {
  const setRoutes = Router();
  const apiRoutes = Router();

  //middlewares
  apiRoutes.use(express.json());
  apiRoutes.use(express.static(__dirname + './../src/assets/upload'));

  //routes
  setRoutes.use('/user', routes.userRoute);
  setRoutes.use('/work', routes.workRoute);
  setRoutes.use('/study', routes.studyRoute);
  setRoutes.use('/tech', routes.techRoute);
  setRoutes.use('/image', routes.imageRoute);

  apiRoutes.use('/api', setRoutes);
  return apiRoutes;
}
