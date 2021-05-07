import * as dotnet from 'dotenv';
dotnet.config();

const dev = {
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.SECRET || 'secret',
  db: {
    HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE: process.env.DATABASE_NAME || 'test_porfolio',
    PORT: process.env.DATABASE_PORT || '5432',
    PASSWORD: process.env.DATABASE_PASSWORD || '123',
    USER: process.env.DATABASE_USERNAME || 'postgres',
    FORCE: process.env.DATABASE_FORCE_SYNC || false,
  },
  admin: {
    USERNAME: process.env.ADMIN_USERNAME || 'admin',
    PASSWORD: process.env.ADMIN_PASSWORD || 'root',
    EMAIL: process.env.ADMIN_EMAIL || 'admin@gmail.com',
  },
};

export default dev;
