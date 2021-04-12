import { createContainer, asClass, asFunction, asValue } from 'awilix';

import * as services from './service';
import * as controllers from './api/controllers';
import * as repository from './data/repositories';
import * as routes from './api/routes/';
import * as mappers from './domain/mappers';

import Server from './api/Server';
import Startup from './Startup';

import config from './../config/';

const container = createContainer();

//routes
container.register({
  apiRoutes: asFunction(config.apiRoutes).singleton(),
  userRoute: asFunction(routes.userRoutes).singleton(),
  workRoute: asFunction(routes.workRoutes).singleton(),
});

//controllers
container.register({
  userController: asClass(controllers.UserController).singleton(),
  workController: asClass(controllers.WorkController).singleton(),
});

//services
container.register({
  userService: asClass(services.UserService).singleton(),
  workService: asClass(services.WorkService).singleton(),
});

//repositories
container.register({
  userRepository: asClass(repository.UserRepository).singleton(),
  workRepository: asClass(repository.WorkRepository).singleton(),
});

//mappers
container.register({
  userMapper: asClass(mappers.UserMapper).singleton(),
  workMapper: asClass(mappers.WorkMapper).singleton(),
});

//app
container.register({
  server: asClass(Server).singleton(),
  startup: asClass(Startup).singleton(),
  envs: asValue(config.env),
});

export { container };
