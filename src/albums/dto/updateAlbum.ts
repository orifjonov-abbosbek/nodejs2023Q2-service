import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './createAlbum';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {}
