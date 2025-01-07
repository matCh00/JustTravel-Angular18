import {Component} from '@angular/core';
import {TripListComponent} from "./trip-list/trip-list.component";

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [
    TripListComponent
  ],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent {

}
