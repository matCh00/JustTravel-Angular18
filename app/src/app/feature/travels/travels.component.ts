import {Component, inject, model} from '@angular/core';
import {TripListComponent} from "./trip-list/trip-list.component";
import {MapComponent} from "./map/map.component";
import {ApiService} from '../../shared/services/api.service';
import {Location} from '../../shared/models/location.model';
import {Button} from 'primeng/button';
import {DialogService} from 'primeng/dynamicdialog';
import {TripDialogFormComponent} from './trip-dialog-form/trip-dialog-form.component';
import {Trip} from '../../shared/models/trip.model';

@Component({
  selector: 'app-travels',
  standalone: true,
  imports: [
    TripListComponent,
    MapComponent,
    Button
  ],
  providers: [DialogService],
  templateUrl: './travels.component.html',
  styleUrl: './travels.component.scss'
})
export class TravelsComponent {

  locations = model<Location[]>([]);

  private apiService: ApiService = inject(ApiService);
  private dialogService: DialogService = inject(DialogService);


  createTrip() {
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
        this.apiService.addTrip(trip).subscribe();
      }
    });
  }

}
