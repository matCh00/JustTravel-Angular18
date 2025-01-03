import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./map.component").then(c => c.MapComponent),
  },
];
