import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'byepo_multi_tenant',
  autoLoadModels: true,
  synchronize: true,
  sync: { alter: true },  
};