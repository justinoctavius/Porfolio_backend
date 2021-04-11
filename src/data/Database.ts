import { Sequelize } from 'sequelize-typescript';
import env from '../../config/env';

class Database {
  public static sequelize: Sequelize;
  static async connect() {
    const dbConfig: any = {
      host: env.db.HOST,
      dialect: 'postgres',
      password: env.db.PASSWORD,
      username: env.db.USER,
      database: 'postgres',
      models: [__dirname + '/models'],
    };
    this.sequelize = new Sequelize(dbConfig);
    await this.sync();
    await this.test();
  }

  private static async test() {
    try {
      await this.sequelize.authenticate();
      console.log('Database connected');
    } catch (error) {
      console.log(error);
      console.log('Unable to connect');
    }
  }

  private static async sync() {
    await this.sequelize
      .sync({ force: false })
      .catch((error) => console.log(error));
  }
}

export default Database;
