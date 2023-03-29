import {DataSource, DataSourceOptions} from 'typeorm';
import { User } from './users/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  database: 'woodduck',
  username:'root',
  password:'root',
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['migrations/*.js'],
  migrationsTableName: 'migrations',
  synchronize: true,
  logging: true,
  // migrationsRun:true,
  };

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;



