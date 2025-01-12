import {Component, inject, OnInit, signal} from '@angular/core';
import {TripListComponent} from "./trip-list/trip-list.component";
import {Location} from '../../shared/models/location.model';
import {Button} from 'primeng/button';
import {DialogService} from 'primeng/dynamicdialog';
import {TripDialogFormComponent} from './trip-dialog-form/trip-dialog-form.component';
import {Trip} from '../../shared/models/trip.model';
import {GoogleMapsComponent} from '../../shared/components/google-maps/google-maps.component';
import {TripService} from '../../shared/services/trip.service';

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [
    TripListComponent,
    Button,
    GoogleMapsComponent
  ],
  providers: [DialogService],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent implements OnInit {

  locations = signal<Location[]>([]);


  private tripService: TripService = inject(TripService);
  private dialogService: DialogService = inject(DialogService);


  ngOnInit() {
    this.tripService.fetchTrips();
  }


  openDialog() {
    const ref = this.dialogService.open(TripDialogFormComponent, {
      header: 'Trip info',
      width: '70%',
      modal: true,
    })

    ref.onClose.subscribe((res: Omit<Trip, "id" | "waypoints"> | null) => {
      if (res !== null) {
        const trip: Omit<Trip, "id"> = {
          ...res,
          waypoints: this.locations()
        }
        this.tripService.addTrip(trip).subscribe();
      }
    });
  }

}
