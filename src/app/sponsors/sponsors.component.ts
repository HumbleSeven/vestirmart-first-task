import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {
  sponsorArray: Array<any> = [
   {id: 1, imageUrl:"../../assets/Brand-1.jpg"},
   {id: 2, imageUrl:"../../assets/Brand-2.jpg"},
   {id: 3, imageUrl:"../../assets/Brand-4.jpg"},
   {id: 4, imageUrl:"../../assets/Brand-5.jpg"},
   {id: 5, imageUrl:"../../assets/Brand-6.jpg"},
  ]
}
