import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './createArtist';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {}
