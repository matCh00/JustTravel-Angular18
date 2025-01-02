import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Sidebar} from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Sidebar
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarVisible = input<boolean>(false);

}
