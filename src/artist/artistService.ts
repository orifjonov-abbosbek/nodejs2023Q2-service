import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { CreateArtistDto } from './dto/createArtist';
import { UpdateArtistDto } from './dto/updateArtist';
import { ArtistRepository } from './artistRepository';
import { TrackService } from '../track/trackService';
import { AlbumService } from '../albums/albumService';
import { FavsService } from 'src/favs/favService';

@Injectable()
export class ArtistService {
  constructor(
    private readonly artistRepository: ArtistRepository,
    @Inject(forwardRef(() => TrackService))
    private readonly trackService: TrackService,
    @Inject(forwardRef(() => AlbumService))
    private readonly albumService: AlbumService,
    @Inject(forwardRef(() => FavsService))
    private readonly favsService: FavsService,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    return this.artistRepository.create(createArtistDto);
  }

  async findAll() {
    return this.artistRepository.findAll();
  }

  async findOne(id: string) {
    return this.artistRepository.findOne(id);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.artistRepository.update(id, updateArtistDto);
  }

  async remove(id: string) {
    await this.artistRepository.remove(id);
    this.trackService.updateArtistId(id);
    this.albumService.updateArtistId(id);
  }
}
