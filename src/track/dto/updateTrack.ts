import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackDto } from './createTrack';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {}
