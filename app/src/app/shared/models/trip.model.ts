import {Location} from './location.model';

export interface Trip {
  id: string,
  name: string,
  location: string,
  startDate: string,
  endDate: string,
  waypoints: Location[]
}
