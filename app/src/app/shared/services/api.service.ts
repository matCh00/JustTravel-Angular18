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


  getPlace(id: number): Observable<Place> {
    return this.httpClient.get<{place: Place}>(`http://localhost:3000/places/${id}`).pipe(
      map((res: {place: Place}) => res.place)
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


  getTrip(id: number): Observable<Trip> {
    return this.httpClient.get<{trip: Trip}>(`http://localhost:3000/trips/${id}`).pipe(
      map((res: {trip: Trip}) => res.trip),
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    )
  }


  addTrip(trip: Omit<Trip, 'id'>): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/trips`, trip).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    )
  }


  editTrip(trip: Trip): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/trips`, trip).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    )
  }


  deleteTrip(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/trips/${id}`).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY;
      })
    )
  }

}
