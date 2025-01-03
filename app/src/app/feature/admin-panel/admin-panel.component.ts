import { Component } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersListComponent} from './users-list/users-list.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    DashboardComponent,
    UsersListComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {

}
