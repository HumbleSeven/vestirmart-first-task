import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTruck, faBackward, faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  constructor(library: FaIconLibrary){
    library.addIcons(faTruck, faBackward, faWrench)
  }
  featureArray: Array<any> = [
    { id: 1, color:"#10B981", iconData:"truck", title: "Free Shipping", featureContent:"On all orders over $75.00" },
    { id: 2, color:"#F59E0B", iconData:"backward", title: "Free Returns", featureContent:"Returns are free within 7 days" },
    { id: 3, color:"#6366F1", iconData:"wrench", title: "Support 24/7", featureContent:"Contact us 24 hours a day" },
    { id: 4, color:"#F03333", iconData:"backward", title: "100% Payment Secure", featureContent:"Your payment are safe with us" },
    // { id: 5, title: "Post 5" },
  ];

}
