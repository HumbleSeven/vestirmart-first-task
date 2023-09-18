import { Component } from '@angular/core';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css']
})
export class RecentlyViewedComponent {
  recentlyViewed: Array<any> = [

    { id: 1, imgUrl: "../../assets/recentlyViewed.jpg", productCategory: "Apple Watch", productName: "Apple Watch Sparkle Strap", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 2, imgUrl: "../../assets/recentlyViewed1.jpg", productCategory: "Smartphones & Tab", productName: "Smartphone & Tablets", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 3, imgUrl: "../../assets/recentlyViewed2.jpg", productCategory: "Headphones", productName: "Ferrari Headphones Sound", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 4, imgUrl: "../../assets/recentlyViewed3.jpg", productCategory: "Loud Speakers", productName: "Loudspeaker High Sound", oldPrice: "$190.00", newPrice: "$80.00" },
  ]
}
