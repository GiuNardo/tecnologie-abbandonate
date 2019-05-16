import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/mock-data';
import { createContentChild } from '@angular/compiler/src/core';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.css']
})
export class ArchivioComponent implements OnInit {

  constructor() { }

  data = DATA;
  author ="";

  ngOnInit() {
  }

  onChange(author:string){
    this.author = author;
    this.createContent();
    console.log("author");
  }

  createContent(){
    this.data.forEach(d => {
      if(this.author!=""){
        
    console.log(d.author + " " + this.author)
        if(d.author == this.author){
          document.getElementById("content").innerHTML=' <li >'+
            ' <div class="row main-row" >' +
                  '<div class="col-5 img">' +
                    '<img src="'+d.image+'">'+
                    d.license+
                ' </div>'+
                  '<div class="col-7 data-col">'+
                      '<div class="row">'+
                          '<div class="col-3 cell cell-title"> Name:</div> <div class="col cell text-justify">'+ d.name+'</div>'+
                      '</div> <div class="row"> <div class="col-3 cell cell-title"> Description: </div><div class="col cell text-justify">' +d.description+' </div>'+
                      '</div><div class="row">  <div class="col-3 cell cell-title"> Since:  </div> <div class="col cell "> '+ d.yearFrom+
                        ' </div> </div> <div class="row"> <div class="col-3 cell cell-title">  to: </div> <div class="col cell "> '+ d.yearTo+
                        '  </div>   </div> </div>   </div> </li>';
        }
      }
    });
  

  }
  


  

}
