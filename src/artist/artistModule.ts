import { Module, forwardRef } from '@nestjs/common';
import { ArtistService } from './artistService';
import { ArtistController } from './artistController';
import { ArtistRepository } from './artistRepository';
import { TrackModule } from '../track/trackModule';
import { AlbumModule } from 'src/albums/albumModule';
import { FavsModule } from 'src/favs/favModule';


@Module({
  imports: [
    forwardRef(() => TrackModule),
    forwardRef(() => AlbumModule),
    forwardRef(() => FavsModule),
  ],
  controllers: [ArtistController],
  providers: [ArtistService, ArtistRepository],
  exports: [ArtistService],
})
export class ArtistModule {}
