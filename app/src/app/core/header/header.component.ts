import {Component, output} from '@angular/core';
import {Button} from 'primeng/button';
import {Toolbar} from 'primeng/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Button,
    Toolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleSidebar = output<boolean>();

}
