import {Component} from '@angular/core';
import {GoogleMap} from '@angular/google-maps';
import {Button} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    GoogleMap,
    Button,
    InputText,
    FormsModule,
    NgStyle
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

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

  places = [
    { name: 'Washington, D.C.', country: 'USA', position: { lat: 38.9072, lng: -77.0369 } },
    { name: 'Ottawa', country: 'Canada', position: { lat: 45.4215, lng: -75.6972 } },
    { name: 'Mexico City', country: 'Mexico', position: { lat: 19.4326, lng: -99.1332 } },
    { name: 'Brasília', country: 'Brazil', position: { lat: -15.8267, lng: -47.9218 } },
    { name: 'Buenos Aires', country: 'Argentina', position: { lat: -34.6037, lng: -58.3816 } },
    { name: 'London', country: 'United Kingdom', position: { lat: 51.5074, lng: -0.1278 } },
    { name: 'Paris', country: 'France', position: { lat: 48.8566, lng: 2.3522 } },
    { name: 'Berlin', country: 'Germany', position: { lat: 52.5200, lng: 13.4050 } },
    { name: 'Madrid', country: 'Spain', position: { lat: 40.4168, lng: -3.7038 } },
    { name: 'Rome', country: 'Italy', position: { lat: 41.9028, lng: 12.4964 } },
    { name: 'Tokyo', country: 'Japan', position: { lat: 35.6895, lng: 139.6917 } },
    { name: 'Seoul', country: 'South Korea', position: { lat: 37.5665, lng: 126.9780 } },
    { name: 'Beijing', country: 'China', position: { lat: 39.9042, lng: 116.4074 } },
    { name: 'New Delhi', country: 'India', position: { lat: 28.6139, lng: 77.2090 } },
    { name: 'Moscow', country: 'Russia', position: { lat: 55.7558, lng: 37.6173 } },
    { name: 'Cairo', country: 'Egypt', position: { lat: 30.0444, lng: 31.2357 } },
    { name: 'Cape Town', country: 'South Africa', position: { lat: -33.9249, lng: 18.4241 } },
    { name: 'Nairobi', country: 'Kenya', position: { lat: -1.2864, lng: 36.8172 } },
    { name: 'Sydney', country: 'Australia', position: { lat: -33.8688, lng: 151.2093 } },
    { name: 'Wellington', country: 'New Zealand', position: { lat: -41.2865, lng: 174.7762 } },
    { name: 'Bangkok', country: 'Thailand', position: { lat: 13.7563, lng: 100.5018 } },
    { name: 'Hanoi', country: 'Vietnam', position: { lat: 21.0285, lng: 105.8542 } },
    { name: 'Jakarta', country: 'Indonesia', position: { lat: -6.2088, lng: 106.8456 } },
    { name: 'Manila', country: 'Philippines', position: { lat: 14.5995, lng: 120.9842 } },
    { name: 'Singapore', country: 'Singapore', position: { lat: 1.3521, lng: 103.8198 } },
    { name: 'Kuala Lumpur', country: 'Malaysia', position: { lat: 3.1390, lng: 101.6869 } },
    { name: 'Reykjavik', country: 'Iceland', position: { lat: 64.1355, lng: -21.8954 } },
    { name: 'Helsinki', country: 'Finland', position: { lat: 60.1695, lng: 24.9354 } },
    { name: 'Oslo', country: 'Norway', position: { lat: 59.9139, lng: 10.7522 } },
    { name: 'Stockholm', country: 'Sweden', position: { lat: 59.3293, lng: 18.0686 } },
    { name: 'Copenhagen', country: 'Denmark', position: { lat: 55.6761, lng: 12.5683 } },
    { name: 'Lisbon', country: 'Portugal', position: { lat: 38.7223, lng: -9.1393 } },
    { name: 'Athens', country: 'Greece', position: { lat: 37.9838, lng: 23.7275 } },
    { name: 'Warsaw', country: 'Poland', position: { lat: 52.2297, lng: 21.0122 } },
    { name: 'Budapest', country: 'Hungary', position: { lat: 47.4979, lng: 19.0402 } },
    { name: 'Prague', country: 'Czech Republic', position: { lat: 50.0755, lng: 14.4378 } },
    { name: 'Brussels', country: 'Belgium', position: { lat: 50.8503, lng: 4.3517 } },
    { name: 'Amsterdam', country: 'Netherlands', position: { lat: 52.3676, lng: 4.9041 } },
    { name: 'Vienna', country: 'Austria', position: { lat: 48.2082, lng: 16.3738 } },
    { name: 'Bern', country: 'Switzerland', position: { lat: 46.9481, lng: 7.4474 } },
    { name: 'Luxembourg City', country: 'Luxembourg', position: { lat: 49.6117, lng: 6.1319 } },
    { name: 'Dublin', country: 'Ireland', position: { lat: 53.3498, lng: -6.2603 } },
    { name: 'Edinburgh', country: 'United Kingdom', position: { lat: 55.9533, lng: -3.1883 } },
    { name: 'Santiago', country: 'Chile', position: { lat: -33.4489, lng: -70.6693 } },
    { name: 'Lima', country: 'Peru', position: { lat: -12.0464, lng: -77.0428 } },
    { name: 'Bogotá', country: 'Colombia', position: { lat: 4.7110, lng: -74.0721 } },
    { name: 'Quito', country: 'Ecuador', position: { lat: -0.1807, lng: -78.4678 } },
    { name: 'Caracas', country: 'Venezuela', position: { lat: 10.4806, lng: -66.9036 } },
    { name: 'Havana', country: 'Cuba', position: { lat: 23.1136, lng: -82.3666 } },
  ];

  randomPlace: any;
  streetViewVisible = false;
  showAnswerInput = false;
  userAnswer = '';
  panorama!: google.maps.StreetViewPanorama;
  lastRequestTime = 0;
  correct: boolean | undefined = undefined;
  count = 0;


  randomizePlace() {
    this.count = 0;
    this.correct = undefined;

    this.randomPlace = this.places[Math.floor(Math.random() * this.places.length)];
    this.streetViewVisible = true;
    this.showAnswerInput = true;
    this.loadStreetView();
    console.log(this.randomPlace)
  }


  loadStreetView() {
    const streetViewDiv = document.getElementById('street-view');
    if (streetViewDiv) {
      this.panorama = new google.maps.StreetViewPanorama(streetViewDiv, {
        position: this.randomPlace.position,
        pov: { heading: 100, pitch: 0 },
        zoom: 1,
        enableCloseButton: false,
      });
      this.panorama.addListener('pov_changed', () => {
        const currentTime = Date.now();
        if (currentTime - this.lastRequestTime > 1000) {
          this.lastRequestTime = currentTime;
        } else {
          this.panorama.setPosition(this.randomPlace.position);
        }
      });
    }
  }


  checkAnswer() {
    if (this.userAnswer.trim().toLowerCase() === this.randomPlace.country.toLowerCase()) {
      this.count++;
      this.correct = true;
    }
    else {
      this.count++;
      this.correct = false;
    }
  }

  ok() {
    this.streetViewVisible = false;
    this.center = this.randomPlace.position;
    this.showAnswerInput = false;
  }

}
