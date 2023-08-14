import { Module, forwardRef } from '@nestjs/common';
import { AlbumService } from './albumService';
import { AlbumController } from './albumController';
import { AlbumRepository } from './albumRepository';
import { TrackModule } from '../track/trackModule';
import { FavsModule } from '../favs/favModule';


@Module({
  imports: [
  
    forwardRef(() => TrackModule),
    forwardRef(() => FavsModule),
  ],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumRepository],
  exports: [AlbumService],
})
export class AlbumModule {}
