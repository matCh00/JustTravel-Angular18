import {Component} from '@angular/core';
import {GoogleMapsComponent} from '../../../shared/components/google-maps/google-maps.component';

@Component({
  selector: 'app-map-travels',
  standalone: true,
  imports: [
    GoogleMapsComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
