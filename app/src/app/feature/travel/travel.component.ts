import {Component} from '@angular/core';
import {TravelCarouselComponent} from './travel-carousel/travel-carousel.component';
import {TravelListComponent} from './travel-list/travel-list.component';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [
    TravelCarouselComponent,
    TravelListComponent
  ],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent {

}
