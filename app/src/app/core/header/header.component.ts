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


  planes = [
    {src: 'plane1.png'},
    {src: 'plane2.png'},
    {src: 'plane3.png'},
    {src: 'plane4.png'},
    {src: 'plane5.png'}
  ];
  selectedPlane: number | null = null;


  isAnimating = false;

  triggerPlaneAnimation() {
    if (this.isAnimating)
      return;

    this.selectedPlane = Math.floor(Math.random() * this.planes.length);

    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
      this.selectedPlane = null;
    }, 6000);
  }

}
