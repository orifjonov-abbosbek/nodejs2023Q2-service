import { Module, forwardRef } from '@nestjs/common';
import { FavsService } from './favService';
import { FavsController } from './favController';
import { AlbumModule } from '../albums/albumModule';
import { ArtistModule } from '../artist/artistModule';
import { TrackModule } from '../track/trackModule';
import { FavoritesRepository } from './favRepository';

@Module({
  imports: [
    forwardRef(() => AlbumModule),
    forwardRef(() => ArtistModule),
    forwardRef(() => TrackModule),
  ],
  controllers: [FavsController],
  providers: [FavsService, FavoritesRepository],
  exports: [FavsService],
})
export class FavsModule {}
