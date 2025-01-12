import {inject, Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Trip} from "../models/trip.model";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private apiService: ApiService = inject(ApiService);


  private trips$ = new BehaviorSubject<Trip[]>([]);
  trips = this.trips$.asObservable();


  fetchTrips(): void {
    this.apiService.getTrips().subscribe((trips) => this.trips$.next(trips));
  }


  addTrip(trip: Omit<Trip, 'id'>): Observable<void> {
    return this.apiService.addTrip(trip).pipe(
      tap(() => this.fetchTrips())
    );
  }

  editTrip(trip: Trip): Observable<void> {
    return this.apiService.editTrip(trip).pipe(
      tap(() => this.fetchTrips())
    );
  }

  deleteTrip(id: string): Observable<void> {
    return this.apiService.deleteTrip(id).pipe(
      tap(() => this.fetchTrips())
    );
  }

}
