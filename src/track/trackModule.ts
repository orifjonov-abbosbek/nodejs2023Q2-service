import { Module, forwardRef } from '@nestjs/common';
import { TrackService } from './trackService';
import { TrackController } from './trackController';
import { TrackRepository } from './trackRepository';
import { FavsModule } from '../favs/favModule';

@Module({
  imports: [
    
    forwardRef(() => FavsModule),
  ],
  controllers: [TrackController],
  providers: [TrackService, TrackRepository],
  exports: [TrackService],
})
export class TrackModule {}
