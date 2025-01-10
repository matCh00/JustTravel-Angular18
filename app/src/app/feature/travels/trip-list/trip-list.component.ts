import {Component, inject, Signal} from '@angular/core';
import {Button} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ApiService} from '../../../shared/services/api.service';
import {Trip} from '../../../shared/models/trip.model';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLink} from '@angular/router';
import {Tooltip} from 'primeng/tooltip';
import {DatePipe} from '@angular/common';

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

  private apiService: ApiService = inject(ApiService);

  trips: Signal<Trip[]> = toSignal(this.apiService.getTrips(), {initialValue: []});

}
