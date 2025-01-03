import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./travel.component").then(c => c.TravelComponent),
  },
  {
    path: "travel/:travelId",
    loadComponent: () => import("./travel-details/travel-details.component").then(c => c.TravelDetailsComponent),
  },
];
