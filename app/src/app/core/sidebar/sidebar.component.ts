import {Component, model} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Drawer} from 'primeng/drawer';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Drawer
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarVisible = model<boolean>(false);

}
