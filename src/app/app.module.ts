import { HeroComponent } from './heroWithHeader/hero.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroComponent}
import { NavBarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './features/features.component';
import { DealsComponent } from './deals/deals.component';
import { NavAndCardsComponent } from './nav-and-cards/nav-and-cards.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, FeaturesComponent, DealsComponent, NavAndCardsComponent, RecentlyViewedComponent, SponsorsComponent, FooterComponent,],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule, HeroComponent]
})
export class AppModule { }
