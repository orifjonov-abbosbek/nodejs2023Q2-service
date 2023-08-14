import { DataSourceOptions } from 'typeorm';
import { AlbumEntity } from './src/albums/entities/albumEntity';
import { ArtistEntity } from './src/artist/entities/artistEntity';
import { FavsEntity } from './src/favs/entities/favEntity';
import { TrackEntity } from './src/track/entities/trackEntity';
import { UserEntity } from './src/user/entities/userEntity';

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  host: process.env.POSTGRES_HOST,
  port: Number.parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [AlbumEntity, ArtistEntity, FavsEntity, TrackEntity, UserEntity],
  synchronize: true,
  logging: true,
  logger: 'debug',
};

export default ormconfig;
