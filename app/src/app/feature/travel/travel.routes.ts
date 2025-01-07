import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: ":travelId",
    loadComponent: () => import("./travel.component").then(c => c.TravelComponent),
  },
];
