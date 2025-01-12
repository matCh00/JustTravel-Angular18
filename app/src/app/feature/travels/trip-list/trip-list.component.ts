import {Component, inject, Signal} from '@angular/core';
import {Button} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {Trip} from '../../../shared/models/trip.model';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLink} from '@angular/router';
import {Tooltip} from 'primeng/tooltip';
import {DatePipe} from '@angular/common';
import {TripService} from '../../../shared/services/trip.service';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [
    Button,
    TableModule,
    RouterLink,
    Tooltip,
    DatePipe
  ],
  templateUrl: './trip-list.component.html',
  styleUrl: './trip-list.component.scss'
})
export class TripListComponent {

  private tripService: TripService = inject(TripService);


  trips: Signal<Trip[]> = toSignal(this.tripService.trips, {initialValue: []});


  deleteTrip(id: string) {
    this.tripService.deleteTrip(id).subscribe()
  }

}
