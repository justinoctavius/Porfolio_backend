import { createContainer, asClass, asFunction, asValue } from 'awilix';

import * as services from './services';
import * as controllers from './api/controllers';
import * as repository from './data/repositories';
import * as routes from './api/routes/';
import * as mappers from './domain/mappers';
import * as helpers from './helpers';

import Server from './api/Server';
import Startup from './Startup';

import config from './../config/';

const container = createContainer();

//routes
container.register({
  apiRoutes: asFunction(config.apiRoutes).singleton(),
  userRoute: asFunction(routes.userRoute).singleton(),
  workRoute: asFunction(routes.workRoute).singleton(),
  studyRoute: asFunction(routes.studyRoute).singleton(),
  techRoute: asFunction(routes.techRoute).singleton(),
  imageRoute: asFunction(routes.imageRoute).singleton(),
});

//controllers
container.register({
  userController: asClass(controllers.UserController).singleton(),
  workController: asClass(controllers.WorkController).singleton(),
  studyController: asClass(controllers.StudyController).singleton(),
  technologyController: asClass(controllers.TechnologyController).singleton(),
  imageController: asClass(controllers.ImageController).singleton(),
});

//services
container.register({
  userService: asClass(services.UserService).singleton(),
  workService: asClass(services.WorkService).singleton(),
  studyService: asClass(services.StudyService).singleton(),
  technologyService: asClass(services.TechnologyService).singleton(),
  imageService: asClass(services.ImageService).singleton(),
});

//repositories
container.register({
  userRepository: asClass(repository.UserRepository).singleton(),
  workRepository: asClass(repository.WorkRepository).singleton(),
  studyRepository: asClass(repository.StudyRepository).singleton(),
  technologyRepository: asClass(repository.TechnologyRepository).singleton(),
  imageRepository: asClass(repository.ImageRepository).singleton(),
});

//helpers
container.register({
  imageManagerHelper: asClass(helpers.ImageManagerHelper).singleton(),
});

//mappers
container.register({
  userMapper: asClass(mappers.UserMapper).singleton(),
  workMapper: asClass(mappers.WorkMapper).singleton(),
  studyMapper: asClass(mappers.StudyMapper).singleton(),
  technologyMapper: asClass(mappers.TechnologyMapper).singleton(),
  imageMapper: asClass(mappers.ImageMapper).singleton(),
});

//app
container.register({
  server: asClass(Server).singleton(),
  startup: asClass(Startup).singleton(),
  envs: asValue(config.env),
});

export { container };
