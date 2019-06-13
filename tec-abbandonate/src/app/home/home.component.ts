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

    document.getElementById("style").innerHTML += '<style>' +
    '#video{ margin-top: 50px; text-align: center;}' +
    '.sub-title{ color: var(--dark-bg); font-weight: 600; font-size: 1.1em; } '+
    'video{ border: 5px solid #ffff; }'+
    '</style>';

    document.getElementById("homespot").innerHTML = 
      '<video width="100%" class="video" loop autoplay muted> <source src="./assets/homevideo3.mp4"  type="video/mp4"> </video>';

    document.getElementById("1").innerHTML = '<p class="sub-title">Audio</p> <video width="300" loop muted autoplay> <source src="./assets/morph_audio.mp4" type="video/mp4"> </video>';
    document.getElementById("central").innerHTML = '<p class="sub-title">Video</p> <video width="300" loop muted autoplay> <source src="./assets/morph_video.mp4" type="video/mp4"> </video>';
    document.getElementById("3").innerHTML = '<p class="sub-title">Fotografia</p> <video width="300" loop muted autoplay> <source src="./assets/morph_fotografia.mp4" type="video/mp4"> </video>';
    document.getElementById("first-bottom").innerHTML = '<p class="sub-title">Comunicazione</p> <video width="300" loop muted autoplay> <source src="./assets/morph_comunicazione.mp4" type="video/mp4"> </video>';
    document.getElementById("5").innerHTML = '<p class="sub-title">Elettronica</p> <video width="300" loop muted autoplay> <source src="./assets/morph_elettronica.mp4" type="video/mp4"> </video>';
    
  }

}
