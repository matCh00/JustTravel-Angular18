import {AfterViewInit, Component, effect, ElementRef, inject, input, NgZone, signal, viewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {GoogleMap, MapDirectionsRenderer, MapMarker} from '@angular/google-maps';
import {InputText} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [
    Button,
    GoogleMap,
    InputText,
    MapDirectionsRenderer,
    MapMarker,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './google-maps.component.html',
  styleUrl: './google-maps.component.scss'
})
export class GoogleMapsComponent implements AfterViewInit {

  locationsInput = input<{ lat: number; lng: number; title?: string }[]>([]);
  locations = signal<{ lat: number; lng: number; title?: string }[]>([]);

  searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');

  center = signal({lat: 52.2297, lng: 21.0122});
  options = signal<google.maps.MapOptions>({
    mapId: "MAP_ID",
    mapTypeId: 'roadmap',
    zoom: 12,
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
  });

  directionsOptions = signal<google.maps.DirectionsRendererOptions>({
    suppressMarkers: true,
    preserveViewport: true,
  });

  directions = signal<google.maps.DirectionsResult | null>(null);

  shareUrl = signal<string>('');


  private ngZone: NgZone = inject(NgZone);


  constructor() {
    effect(() => {
      this.locations.set([...this.locationsInput()]);
    }, { allowSignalWrites: true });
  }


  ngAfterViewInit(): void {
    this.initAutocomplete();
  }


  initAutocomplete(): void {
    const input = this.searchBox()!.nativeElement;
    const autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ['geometry', 'name'],
    });

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();

        if (place.geometry && place.geometry.location) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            title: place.name,
          };
          this.locations.update(locations => [...locations, location]);
          this.updateRoute();
          this.center.set({lat: location.lat, lng: location.lng});
        }
      });
    });
  }


  addPoint(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) {
    if (event.latLng) {
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        title: '',
      };
      this.locations.update(locations => [...locations, location]);

      this.getAddress(location.lat, location.lng).then((address) => {
        this.locations.update(locations =>
          locations.map(loc =>
            loc === location ? {...loc, title: address || 'Unknown Location'} : loc
          )
        );
      });
      this.updateRoute();
    }
  }


  removePoint(index: number) {
    this.locations.update(locations => locations.filter((_, i) => i !== index));
    this.updateRoute();
  }


  updateRoute() {
    if (this.locations().length < 2) {
      this.directions.set(null);
      this.updateShareUrl();
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const waypoints = this.locations().slice(1, -1).map((loc) => ({
      location: {lat: loc.lat, lng: loc.lng},
      stopover: true,
    }));

    const request: google.maps.DirectionsRequest = {
      origin: this.locations()[0],
      destination: this.locations()[this.locations().length - 1],
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    }

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directions.set(result);
        this.updateShareUrl();
      } else {
        console.error('Directions request failed due to:', status);
      }
    });
  }


  updateShareUrl() {
    const baseUrl = 'https://www.google.com/maps/dir/';
    const path = this.locations()
      .map((loc) => `${loc.lat},${loc.lng}`)
      .join('/');
    this.shareUrl.set(`${baseUrl}${path}`);
  }


  exportMap() {
    if (this.locations().length < 2) {
      return;
    }
    this.updateShareUrl();
    const link = document.createElement('a');
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(this.shareUrl())}`;
    link.download = 'directions.maps.app.goo.gl';
    link.click();
  }


  private async getAddress(lat: number, lng: number): Promise<string | null> {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve) => {
      geocoder.geocode({location: {lat, lng}}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
          resolve(results[0].formatted_address);
        } else {
          resolve(null);
        }
      });
    });
  }


  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('index', index.toString());
  }


  onDrop(event: DragEvent, targetIndex: number): void {
    const draggedIndex = parseInt(event.dataTransfer?.getData('index') || '-1', 10);
    if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
      this.locations.update(locations => {
        const updatedLocations = [...locations];
        const temp = updatedLocations[draggedIndex];
        updatedLocations[draggedIndex] = updatedLocations[targetIndex];
        updatedLocations[targetIndex] = temp;
        return updatedLocations;
      });
      this.updateRoute();
    }
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

}
