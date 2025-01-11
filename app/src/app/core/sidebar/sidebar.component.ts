import {Component, model} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Drawer} from 'primeng/drawer';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Drawer,
    ButtonDirective
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarVisible = model<boolean>(false);

}
