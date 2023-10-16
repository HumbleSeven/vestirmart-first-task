import { Component } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(faList, faGrip);
  }
  newArrival: Array<any> = [

    { id: 1, imgUrl: "../../assets/arrival.jpg", productCategory: "Camera", productName: "Sony Camera", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 2, imgUrl: "../../assets/arrival1.jpg", productCategory: "Microphone", productName: "Microphone Behringer", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 3, imgUrl: "../../assets/arrival2.jpg", productCategory: "Air Pods", productName: "Air Pods", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 4, imgUrl: "../../assets/arrival3.jpg", productCategory: "Gadgets", productName: "Gadgets", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 5, imgUrl: "../../assets/arrival4.jpg", productCategory: "Power Bank", productName: "Power Bank 1000Mhp", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 6, imgUrl: "../../assets/arrival5.jpg", productCategory: "Pocket Router", productName: "Round Pocket Router", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 7, imgUrl: "../../assets/arrival6.jpg", productCategory: "Games & Controllers", productName: "Games & Controllers", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 8, imgUrl: "../../assets/arrival7.jpg", productCategory: "Zoom Lens", productName: "Canon Zoom Lens", oldPrice: "$190.00", newPrice: "$80.00" },

    { id: 1, imgUrl: "../../assets/arrival.jpg", productCategory: "Camera", productName: "Sony Camera", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 2, imgUrl: "../../assets/arrival1.jpg", productCategory: "Microphone", productName: "Microphone Behringer", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 3, imgUrl: "../../assets/arrival2.jpg", productCategory: "Air Pods", productName: "Air Pods", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 4, imgUrl: "../../assets/arrival3.jpg", productCategory: "Gadgets", productName: "Gadgets", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 5, imgUrl: "../../assets/arrival4.jpg", productCategory: "Power Bank", productName: "Power Bank 1000Mhp", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 6, imgUrl: "../../assets/arrival5.jpg", productCategory: "Pocket Router", productName: "Round Pocket Router", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 7, imgUrl: "../../assets/arrival6.jpg", productCategory: "Games & Controllers", productName: "Games & Controllers", oldPrice: "$190.00", newPrice: "$80.00" },
    { id: 8, imgUrl: "../../assets/arrival7.jpg", productCategory: "Zoom Lens", productName: "Canon Zoom Lens", oldPrice: "$190.00", newPrice: "$80.00" },

  ]
}


