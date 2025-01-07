import {Component} from '@angular/core';
import {PlacesCarouselComponent} from './places-carousel/places-carousel.component';
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    PlacesCarouselComponent,
    MapComponent,
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

}
