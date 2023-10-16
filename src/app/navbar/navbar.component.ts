// import { faRepeat } from './../../../node_modules/@fortawesome/free-solid-svg-icons/faRepeat.d';
// import { faPerson } from './../../../node_modules/@fortawesome/free-solid-svg-icons/faPerson.d';
import { Component } from "@angular/core";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faUser, faRepeat, faHeart, faCartPlus, faBars, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle, faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css", "../../styles/base.scss"]
})
export class NavBarComponent {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(faUser, faRepeat, faHeart, faCartPlus, faBars, faAngleDown, farCircle, farSquare, faSearch
      , faStackOverflow, faGithub, faMedium);
  }
}
