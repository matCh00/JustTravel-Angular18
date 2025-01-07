import {inject, Injectable} from '@angular/core';
import {Place} from '../models/place.model';
import {HttpClient} from '@angular/common/http';
import {catchError, EMPTY, map, Observable} from 'rxjs';
import {Trip} from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient: HttpClient = inject(HttpClient);

  getPlaces(): Observable<Place[]> {
    return this.httpClient.get<{places: Place[]}>('http://localhost:3000/places').pipe(
      map((res: {places: Place[]}) => res.places)
    )
  }

  getTrips(): Observable<Trip[]> {
    return this.httpClient.get<{trips: Trip[]}>('http://localhost:3000/trips').pipe(
      map((res: {trips: Trip[]}) => res.trips),
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    )
  }

}
