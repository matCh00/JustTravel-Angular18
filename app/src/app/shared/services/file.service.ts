import {inject, Injectable} from '@angular/core';
import {Place} from '../models/place.model';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private httpClient: HttpClient = inject(HttpClient);

  getPlaces(): Observable<Place[]> {
    return this.httpClient.get<{places: Place[]}>('http://localhost:3000/places').pipe(
      map((res: {places: Place[]}) => res.places)
    )
  }

}
