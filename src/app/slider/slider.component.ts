import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare var Typewriter: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var app = document.getElementById("app");

  var typewriter = new Typewriter(app, {
    loop: true,
  });

  typewriter
    .typeString("Bookme ")
    .typeString("a Bus Ticket")
    .pauseFor(2500)
    .deleteChars(12)
    .typeString("an Air Ticket")
    .pauseFor(2500)
    .deleteChars(13)
    .typeString("a Cargo")
    .pauseFor(2500)
    .deleteChars(7)
    .typeString("an Event Ticket")
    .pauseFor(2500)
    .deleteChars(15)
    .typeString("a Match Ticket")
    .pauseFor(2500)
    .deleteChars(14)
    .typeString("a Hotel Room")
    .pauseFor(2500)
    .deleteChars(12)
    .typeString("a Car")
    .pauseFor(2500)
    .start();
  }
  
}
