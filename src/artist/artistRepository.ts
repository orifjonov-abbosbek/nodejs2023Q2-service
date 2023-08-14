import { Injectable } from '@nestjs/common';
import { Artist } from './artistTypes';
import { CreateArtistDto } from './dto/createArtist';
import { UpdateArtistDto } from './dto/updateArtist';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundException } from '../libs/exeptions';

@Injectable()
export class ArtistRepository {
  artists: Artist[];

  constructor() {
    this.artists = [];
  }

  async findAll(): Promise<Artist[]> {
    return this.artists;
  }

  async findOne(id: string): Promise<Artist> {
    const artist = this.artists.find((artist) => artist.id === id);
    if (!artist) throw new NotFoundException(id);
    return artist;
  }

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    const artist: Artist = {
      id: uuidv4(),
      ...createArtistDto,
    };
    this.artists.push(artist);
    return artist;
  }

  async update(id: string, updateArtistDto: UpdateArtistDto): Promise<Artist> {
    const artist = await this.findOne(id);
    Object.assign(artist, updateArtistDto);
    return artist;
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    this.artists = this.artists.filter((artist) => artist.id !== id);
  }
}
