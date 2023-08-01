import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  standalone: true,
  // template: `
  // <section class="listing">
  //   <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
  //   <h2 class="listing-heading">{{ housingLocation.name }}</h2>
  //   <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
  // </section>
  // `,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
