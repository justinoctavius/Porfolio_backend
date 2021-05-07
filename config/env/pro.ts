import * as dotnet from 'dotenv';
dotnet.config();

const pro = {
  PORT: process.env.PORT || 80,
  JWT_SECRET: process.env.SECRET,
  db: {
    HOST: process.env.DATABASE_HOST,
    DATABASE: process.env.DATABASE_NAME,
    PORT: process.env.DATABASE_PORT || '5432',
    PASSWORD: process.env.DATABASE_PASSWORD,
    USER: process.env.DATABASE_USERNAME,
    FORCE: process.env.DATABASE_FORCE_SYNC || false,
  },
  admin: {
    USERNAME: process.env.ADMIN_USERNAME,
    PASSWORD: process.env.ADMIN_PASSWORD,
    EMAIL: process.env.ADMIN_EMAIL,
  },
};
export default pro;
