import express, { Router } from 'express';

export default function (routes) {
  const setRoutes = Router();
  const apiRoutes = Router();

  //middleware
  apiRoutes.use(express.json());
  apiRoutes.use(express.static(__dirname + './../src/assets/upload'));

  //routes
  setRoutes.use('/user', routes.userRoute);
  setRoutes.use('/work', routes.workRoute);
  setRoutes.use('/study', routes.studyRoute);
  setRoutes.use('/tech', routes.techRoute);
  setRoutes.use('/image', routes.imageRoute);
  setRoutes.use('/certificate', routes.certificateRoute);
  setRoutes.use('/project', routes.projectRoute);
  setRoutes.use('/link', routes.linkRoute);

  apiRoutes.use('/api', setRoutes);
  return apiRoutes;
}
