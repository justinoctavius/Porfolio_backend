import { container } from './src/container';
import Database from './src/data/Database';
import Startup from './src/Startup';

const startup: Startup = container.resolve('startup');

Database.connect().then(() => {
  startup.start().then(() => {
    startup.createAdmin();
  });
});
