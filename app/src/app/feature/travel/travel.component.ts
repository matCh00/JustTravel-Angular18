import {Component, effect, inject, input, OnInit, signal} from '@angular/core';
import {Trip} from '../../shared/models/trip.model';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TripDetailsFormComponent} from './trip-details-form/trip-details-form.component';
import {Button} from 'primeng/button';
import {Location} from '../../shared/models/location.model';
import {GoogleMapsComponent} from '../../shared/components/google-maps/google-maps.component';
import {TripService} from '../../shared/services/trip.service';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TripDetailsFormComponent,
    Button,
    RouterLink,
    GoogleMapsComponent,
  ],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent implements OnInit {

  trip = input.required<Trip>();
  locations = signal<Location[]>([]);

  editMode = signal<boolean>(false);


  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private tripService: TripService = inject(TripService);
  private router: Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);


  tripDetailsForm: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    location: [null, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
  })


  constructor() {
    effect(() => {
      this.tripDetailsForm.patchValue({
        ...this.trip(),
        startDate: new Date(this.trip().startDate),
        endDate: new Date(this.trip().endDate),
      });

      this.locations.set(this.trip().waypoints);
    }, {allowSignalWrites: true});
  }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.editMode.set(queryParams['edit'] === 'true');
      if (!this.editMode()) {
        this.tripDetailsForm.disable();
      }
    });
  }


  onSubmit() {
    const trip: Trip = {
      ...this.tripDetailsForm.getRawValue(),
      id: this.trip().id,
      waypoints: this.locations(),
    }
    this.tripService.editTrip(trip).subscribe(() => {
      this.router.navigate(['/travels']);
    });
  }

}
