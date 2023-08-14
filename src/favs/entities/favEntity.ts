import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('favs')
export class FavsEntity {
  @PrimaryColumn()
  id: number;

  @Column('simple-array')
  artists: string[];

  @Column('simple-array')
  albums: string[];

  @Column('simple-array')
  tracks: string[];
}
