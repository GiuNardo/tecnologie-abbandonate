import { Component, OnInit } from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-anteprima',
  templateUrl: './anteprima.component.html',
  styleUrls: ['./anteprima.component.css']
})
export class AnteprimaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    document.getElementById('item-container').style.display = 'block';
    animateScrollTo(document.querySelector('.item-descr'));
    document.getElementById("author").style.display = "block";

  }

  onClose() {
    document.getElementById("anteprima").style.display = "none";
    document.getElementById("timeline-container").className = "col";
    //document.getElementById("item-container").style.display = "none";
  }

}
