import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./feature/home/home.component").then(c => c.HomeComponent),
  },
  {
    path: "explore",
    loadComponent: () => import("./feature/explore/explore.component").then(c => c.ExploreComponent),
  },

  {
    path: "travel",
    loadChildren: () => import("./feature/travel/travel.routes").then(r => r.routes),
  },
  {
    path: "travels",
    loadChildren: () => import("./feature/travels/travels.routes").then(r => r.routes),
  },

  {
    path: "**",
    redirectTo: '',
    pathMatch: 'full',
  },
];
