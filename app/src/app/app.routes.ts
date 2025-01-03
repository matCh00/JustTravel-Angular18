import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/travel/travel.routes").then(r => r.routes),
  },
  {
    path: "review",
    loadChildren: () => import("./feature/review/review.routes").then(r => r.routes),
  },
  {
    path: "map",
    loadChildren: () => import("./feature/map/map.routes").then(r => r.routes),
  },
  {
    path: "admin-panel",
    loadChildren: () => import("./feature/admin-panel/admin-panel.routes").then(r => r.routes),
  },
  {
    path: "**",
    redirectTo: '',
    pathMatch: 'full',
  },
];
