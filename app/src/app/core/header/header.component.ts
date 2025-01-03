import {Component, output} from '@angular/core';
import {Button} from 'primeng/button';
import {Toolbar} from 'primeng/toolbar';
import {planeAnimation} from './animation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Button,
    Toolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [planeAnimation]
})
export class HeaderComponent {

  toggleSidebar = output<boolean>();


  isAnimating = false;

  triggerPlaneAnimation() {
    if (this.isAnimating)
      return;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 6000);
  }

}
