import {Component} from '@angular/core';
import {TripListComponent} from "./trip-list/trip-list.component";
import {MapComponent} from "./map/map.component";

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [
    TripListComponent,
    MapComponent
  ],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent {

}
