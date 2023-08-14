import { Album } from '../albums/albumTypes';
import { Artist } from '../artist/artistTypes';
import { Track } from '../track/trackTypes';

export interface Favorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}

export interface FavoritesResponse {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}