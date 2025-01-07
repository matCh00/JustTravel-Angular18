import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./travels.component").then(c => c.TravelsComponent),
  },
];
