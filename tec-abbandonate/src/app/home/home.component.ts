import { Component, OnInit } from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animateScrollTo(document.querySelector("#banner"));
  }

}
