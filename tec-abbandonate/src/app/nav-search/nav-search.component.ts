import { Component, OnInit, Output,  EventEmitter, Input  } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent {

  @Output() author = new EventEmitter<string>();;

  value = "";
  playerName = "";
  constructor() { }

  ngOnInit() {
  }

  onChange(name:string){
    this.author.emit(name);
    
  }

}
