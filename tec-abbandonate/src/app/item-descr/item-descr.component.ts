import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-descr',
  templateUrl: './item-descr.component.html',
  styleUrls: ['./item-descr.component.css']
})


export class ItemDescrComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
