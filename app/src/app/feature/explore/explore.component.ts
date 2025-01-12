import {Component} from '@angular/core';
import {PlacesCarouselComponent} from './places-carousel/places-carousel.component';
import {GoogleMapsGameComponent} from '../../shared/components/google-maps-game/google-maps-game.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [
    PlacesCarouselComponent,
    GoogleMapsGameComponent,
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

}
