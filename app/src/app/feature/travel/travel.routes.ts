import {Routes} from '@angular/router';
import {travelResolver} from './travel.resolver';

export const routes: Routes = [
  {
    path: ":travelId",
    loadComponent: () => import("./travel.component").then(c => c.TravelComponent),
    resolve: {
      trip: travelResolver
    },
  },
];
