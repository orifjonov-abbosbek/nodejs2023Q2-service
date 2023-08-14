import { Module } from '@nestjs/common';
import { AppController } from './appController';
import { AppService } from './appService';
import { UserModule } from './user/userModule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TrackModule } from './track/trackModule';
import { ArtistModule } from './artist/artistModule';
import { AlbumModule } from './albums/albumModule';
import { FavsModule } from './favs/favModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(connectionOptions),
    UserModule,
    TrackModule,
    ArtistModule,
    FavsModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
