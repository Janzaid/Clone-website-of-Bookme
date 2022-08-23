import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoMenuComponent } from './logo-menu/logo-menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OmdbDetailsComponent } from './omdb-details/omdb-details.component';
import { OmdbSearchComponent } from './omdb-search/omdb-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoMenuComponent,
    MenuBarComponent,
    SliderComponent,
    CardsComponent,
    CarouselComponent,
    OmdbDetailsComponent,
    OmdbSearchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    IvyCarouselModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
