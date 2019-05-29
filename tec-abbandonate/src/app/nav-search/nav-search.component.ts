import { Component, OnInit, Output,  EventEmitter, Input  } from '@angular/core';


@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent {

  @Output() player = new EventEmitter<string>();

  cat ="";
  value = "";
  playerName = "";
  

  constructor() { }

  ngOnInit() {
  }

  onChange(name:string){
    this.player.emit(name);
  }
  
}
