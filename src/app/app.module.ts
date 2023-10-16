import { HeroComponent } from './heroWithHeader/hero.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './features/features.component';
import { DealsComponent } from './deals/deals.component';
import { NavAndCardsComponent } from './nav-and-cards/nav-and-cards.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopContentComponent } from './shop-content/shop-content.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, FeaturesComponent, DealsComponent,
    NavAndCardsComponent, RecentlyViewedComponent, SponsorsComponent, FooterComponent, HomeComponent,
    AboutComponent, BlogComponent, ShopComponent, BreadcrumbComponent, ProductDetailsComponent,
    ShopContentComponent,],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule, HeroComponent, RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "shop", component: ShopComponent },
    { path: "blog", component: BlogComponent },
  ])]
})
export class AppModule { }
