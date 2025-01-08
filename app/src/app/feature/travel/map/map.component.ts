import {AfterViewInit, Component, ElementRef, inject, NgZone, viewChild} from '@angular/core';
import {Button} from 'primeng/button';
import {GoogleMap, MapDirectionsRenderer, MapMarker} from '@angular/google-maps';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    Button,
    GoogleMap,
    InputText,
    MapDirectionsRenderer,
    MapMarker
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {

  searchBox = viewChild<ElementRef<HTMLInputElement>>('searchBox');

  center = {lat: 52.2297, lng: 21.0122};
  options: google.maps.MapOptions = {
    mapId: "MAP_ID",
    mapTypeId: 'roadmap',
    zoom: 12,
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
  };

  directionsOptions: google.maps.DirectionsRendererOptions = {
    suppressMarkers: true,
    preserveViewport: true,
  };

  directions: google.maps.DirectionsResult | null = null;

  locations: { lat: number; lng: number; title?: string }[] = [];


  private ngZone: NgZone = inject(NgZone);


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
          this.locations.push(location);
          this.updateRoute();
          this.center = {lat: location.lat, lng: location.lng};
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
      this.locations.push(location);

      this.getAddress(location.lat, location.lng).then((address) => {
        location.title = address || 'Unknown Location';
      });
      this.updateRoute();
    }
  }


  removePoint(index: number) {
    this.locations.splice(index, 1);
    this.updateRoute();
  }


  updateRoute() {
    if (this.locations.length < 2) {
      this.directions = null;
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const waypoints = this.locations.slice(1, -1).map((loc) => ({
      location: {lat: loc.lat, lng: loc.lng},
      stopover: true,
    }));

    const request: google.maps.DirectionsRequest = {
      origin: this.locations[0],
      destination: this.locations[this.locations.length - 1],
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    }

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directions = result;
      }
      else {
        console.error('Directions request failed due to:', status);
      }
    });
  }


  exportMap() {
    if (this.locations.length < 2) {
      return;
    }

    const baseUrl = 'https://www.google.com/maps/dir/';
    const path = this.locations
      .map((loc) => `${loc.lat},${loc.lng}`)
      .join('/');
    const shareUrl = `${baseUrl}${path}`;

    const link = document.createElement('a');
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(shareUrl)}`;
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
      const temp = this.locations[draggedIndex];
      this.locations[draggedIndex] = this.locations[targetIndex];
      this.locations[targetIndex] = temp;
      this.updateRoute();
    }
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

}
