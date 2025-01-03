import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./admin-panel.component").then(c => c.AdminPanelComponent),
  },
];
