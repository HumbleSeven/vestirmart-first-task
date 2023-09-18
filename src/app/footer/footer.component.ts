import { Component } from '@angular/core';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(faLocationDot, faFacebook, faLinkedin,faInstagram,faTwitter,);
  }
}
