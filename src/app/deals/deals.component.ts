import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
  dealsArray: Array<any> = [
    { id: 1, imgUrl: "../../assets/deal4.jpg", productCategory: "Apple Watch", productName: "Apple Watch Sparkle Strap", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 2, imgUrl: "../../assets/deal1.jpg", productCategory: "Smartphones & Tab", productName: "Smartphone & Tablets", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 3, imgUrl: "../../assets/deal2.jpg", productCategory: "Headphones", productName: "Ferrari Headphones Sound", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 4, imgUrl: "../../assets/deal3.jpg", productCategory: "Loud Speakers", productName: "Loudspeaker High Sound", oldPrice: "$190.00", newPrice: "$80.00" },
  ];

  subDeal: Array<any> = [
    { id: 1, imgUrl: "../../assets/image1.jpg", subProductName: "SmartPhone x10", startPrice: "$399" },
    { id: 2, imgUrl: "../../assets/image2.jpg", subProductName: "SmartPhone V1", startPrice: "$399" },
    { id: 3, imgUrl: "../../assets/image3.jpg", subProductName: "SmartPhone x2", startPrice: "$399" }
  ]

}
