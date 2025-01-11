import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Trip} from '../../shared/models/trip.model';

export const travelResolver: ResolveFn<Trip> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const travelId: string = route.paramMap.get('travelId')!;
  return inject(ApiService).getTrip(travelId);
};
