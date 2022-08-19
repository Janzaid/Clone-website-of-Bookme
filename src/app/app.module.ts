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
import {IvyCarouselModule} from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    AppComponent,
    LogoMenuComponent,
    MenuBarComponent,
    SliderComponent,
    CardsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
