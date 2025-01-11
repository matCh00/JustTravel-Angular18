import {Component, model} from '@angular/core';
import {GoogleMapsComponent} from '../../../shared/components/google-maps/google-maps.component';
import {Location} from '../../../shared/models/location.model';

@Component({
  selector: 'app-map-travel',
  standalone: true,
  imports: [
    GoogleMapsComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  locations = model<Location[]>([]);

}
