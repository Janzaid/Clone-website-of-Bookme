import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [0].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  }

}
