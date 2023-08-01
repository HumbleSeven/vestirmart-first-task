import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HomeComponent, HousingLocationComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
