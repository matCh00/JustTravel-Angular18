import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {Carousel} from 'primeng/carousel';
import {ProgressSpinner} from 'primeng/progressspinner';
import {Place} from '../../../shared/models/place.model';
import {ApiService} from '../../../shared/services/api.service';

@Component({
  selector: 'app-places-carousel',
  standalone: true,
  imports: [
    Carousel,
    ProgressSpinner
  ],
  templateUrl: './places-carousel.component.html',
  styleUrl: './places-carousel.component.scss'
})
export class PlacesCarouselComponent implements OnInit {

  places = signal<Place[]>([]);
  loading = signal<boolean>(false);
  error = signal<boolean>(false);

  private apiService: ApiService = inject(ApiService);
  private destroyRef: DestroyRef = inject(DestroyRef);


  ngOnInit(): void {
    this.loading.set(true);

    const sub = this.apiService.getPlaces().subscribe({
      next: places => {
        this.places.set(places);
        this.loading.set(false);
      },
      error: error => {
        this.loading.set(false);
        this.error.set(true);
      },
    })

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }

}
