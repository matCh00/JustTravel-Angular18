import {Component} from '@angular/core';
import {Toolbar} from 'primeng/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    Toolbar
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
