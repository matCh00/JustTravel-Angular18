import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./review.component").then(c => c.ReviewComponent),
  },
];
