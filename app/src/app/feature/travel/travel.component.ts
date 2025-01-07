import {Component} from '@angular/core';
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [
    MapComponent
  ],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent {

}
