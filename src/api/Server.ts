import express = require('express');
import envs from './../../config/env';

class Server {
  public static _app: express.Express;
  private _port: number;
  constructor({ apiRoutes }) {
    Server._app = express();
    this._port = envs.PORT;
    Server._app.use(apiRoutes);
  }

  start() {
    Server._app.listen(this._port, () =>
      console.log(`server running on port ${this._port}`)
    );
  }
}

export default Server;
