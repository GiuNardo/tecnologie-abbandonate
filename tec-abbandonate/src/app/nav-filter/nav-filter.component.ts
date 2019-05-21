import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-filter',
  templateUrl: './nav-filter.component.html',
  styleUrls: ['./nav-filter.component.css']
})

export class NavFilterComponent implements OnInit {

  cat1 = 'audio';
  cat2 = 'video';
  cat3 = 'comunicazione';
  cat4 = 'elettronica';
  cat5 = 'fotografia';
  all = 'all';
 
  @Output() chosen = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit() {
  }

  onClick(id : string) {

    this.chosen.emit(id);
    
    var x = document.getElementsByClassName("nav-link");
    var i:number;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
      x[i].classList.remove("audio");
      x[i].classList.remove("video");
      x[i].classList.remove("fotografia");
      x[i].classList.remove("elettronica");
      x[i].classList.remove("comunicazione"); 
      x[i].classList.remove("all");
    }

    if (document.getElementById(id).focus){
      document.getElementById(id).className += " active";
    } 

    switch(id){
      case "video" : document.getElementById(id).className += " "+id;
      break;
      case "audio" : document.getElementById(id).className += " "+id;
      break;
      case "fotografia" : document.getElementById(id).className += " "+id;
      break;
      case "comunicazione" : document.getElementById(id).className += " "+id;
      break;
      case "elettronica" : document.getElementById(id).className += " "+id;
      break;
      case "all" : document.getElementById(id).className += " "+id;
      break;
    }
  }

}
