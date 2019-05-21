import { Component, OnInit, Output,  EventEmitter, Input  } from '@angular/core';


@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent {

  @Output() author = new EventEmitter<string>();

  cat ="";
  value = "";
  playerName = "";
  

  constructor() { }

  ngOnInit() {
  }

  onChange(name:string){
    this.author.emit(name);
  }
/*
  onChosen(chosen:string){
    this.cat = chosen;
    console.log("a"+ chosen);
    this.category.emit(chosen);
  }
  */
}
