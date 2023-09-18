import { Component } from '@angular/core';
// import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
// import { HousingLocation } from '../housinglocation';
@Component({
  selector:"app-hero",
  templateUrl:"./hero.component.html",
  styleUrls:["./hero.component.scss", "../../styles/base.scss"],
  standalone:true,
  imports:[
    // CommonModule, HousingLocationComponent
  ]
})
export class HeroComponent {

}
