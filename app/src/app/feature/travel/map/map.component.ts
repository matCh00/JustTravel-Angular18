import {Component} from '@angular/core';
import {GoogleMapComponent} from '../../../shared/components/google-map/google-map.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    GoogleMapComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
