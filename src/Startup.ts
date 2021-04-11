import config from '../config';
import Server from './api/Server';
import { IUserService } from './service';

class Startup {
  private _server: Server;
  private _userService: IUserService;
  constructor({ server, userService }) {
    this._userService = userService;
    this._server = server;
  }

  async start() {
    console.log('hola');
    this._server.start();
  }
  async createAdmin() {
    const user: any = {
      username: config.env.admin.USERNAME,
      email: config.env.admin.EMAIL,
      password: config.env.admin.PASSWORD,
    };
    await this._userService.signupAsync(user);
  }
}

export default Startup;
