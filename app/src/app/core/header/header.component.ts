import {Component, output} from '@angular/core';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleSidebar = output();

}
