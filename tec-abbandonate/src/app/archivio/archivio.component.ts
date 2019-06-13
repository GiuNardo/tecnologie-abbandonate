import { Component, OnInit } from '@angular/core';
import animateScrollTo from 'animated-scroll-to';

import { DATA } from '../mock-data';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.css']
})

export class ArchivioComponent implements OnInit {

  constructor() { }
    
  data = DATA;
  author ="";
  category="";

  ngOnInit() {
    animateScrollTo(document.querySelector("#main2"))
    this.createContent();
  }
  
  onChange(author:string){
    this.author = author;
    this.createContent();
  }

  onChosen(chosen:string){
    this.category = chosen;
    this.createContent();
  }
  

  createContent(){

    document.getElementById("cerca").innerHTML = "Cerca autore";
    document.getElementById("content").innerHTML = 
        '<style>'+
            'img { max-width: 400px; max-height: 320px; }' +
            '#elemento-archivio { list-style:none; text-align:center; padding:20px;background-color: #ffff;}' +
            '.container-fluid{ padding: 50px!important; }'+
            '.data-col {margin:auto; width:90%; margin-top:10px; border-top: 1px solid #23373D;}'+ 
            '.cell-title{ float:left; color: #f8b500; font-size: 1.2em; letter-spacing: 1px; font-weight: 700; padding-left: 50px; }' +
            '.cell{vertical-align: text-top!important; text-align:left;}' +
            '.row{ margin-top: 10px; text-align: center;}' +
            '#descrizione { margin-right: 20px; margin-bottom: 10px; }' +
            '#video-parent{ text-align:center }'+
            '#image-parent{ padding-left: 40px; text-align:center }'+
        '</style>';

    this.data.forEach(d => {
        if(this.category=="" || this.category=="all"){

            if(d.author.toLocaleLowerCase().includes(this.author.toLocaleLowerCase())){
            
                var link = '';
                if(d.spot!='') {
                    link = 
                        '<div id="div-video"><iframe width="500" height="320" src="' + d.spot + '? ' +
                            'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' + 
                        '</iframe></div>' 
                }

                document.getElementById("content").innerHTML += 
                '<li id="elemento-archivio">'+
                    '<div class="row" >' +
                        '<div class="row">' +
                            '<div class="col-7" id="image-parent"><img  src="' + d.image + '"></div>' +
                            '<div class="col-5" id="video-parent">' + link + '</div>' +
                        '</div>' +
                        '<div class="data-col">' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Nome: </div>' +
                                '<div class="col cell text-justify"><b>' + d.name + '</b></div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Di: </div>' +
                                '<div class="col cell text-justify"><b>' + d.author + '</b></div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Anno invenzione: </div>' +
                                '<div class="col cell ">' + d.yearFrom + '</div>' +
                            '</div>' +
                            '<div class="row">' + 
                                '<div class="col-3 cell cell-title "> Anno ritiro: </div>' +
                                '<div class="col cell ">' + d.yearTo + '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title "> Descrizione: </div>' +
                                '<div id="descrizione" class="col cell text-justify">' + d.description + ' </div>'+
                            '</div>' + 
                        '</div>' + 
                    '</div>'+
                '</li> <br/>';

            }

        } else {

            if(d.author.toLocaleLowerCase().includes(this.author.toLocaleLowerCase()) && this.category==d.category){
            
                document.getElementById("content").innerHTML += 
                '<li id="elemento-archivio">'+
                    '<div class="row main-row" >' +
                        '<div class="img row">' +
                            '<div class="col-7" id="image-parent><img  src="' + d.image + '"></div>' +
                            '<div class="col-5" id="video-parent" style="width:100%">' + link + '</div>' +
                        '</div>' +
                        '<div class="data-col">' +
                            '<div class="row">' +
                                '<div class="col-2 cell cell-title"> Nome: </div>' +
                                '<div class="col cell text-justify"><b>' + d.name + '</b></div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-2 cell cell-title"> Di: </div>' +
                                '<div class="col cell text-justify"><b>' + d.author + '</b></div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-2 cell cell-title"> Anno invenzione: </div>' +
                                '<div class="col cell ">' + d.yearFrom + '</div>' +
                            '</div>' +
                            '<div class="row">' + 
                                '<div class="col-2 cell cell-title"> Anno ritiro: </div>' +
                                '<div class="col cell ">' + d.yearTo + '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-2 cell cell-title"> Descrizione: </div>' +
                                '<div id="descrizione" class="col cell text-justify">' + d.description + ' </div>'+
                            '</div>' + 
                        '</div>' + 
                    '</div>'+
                '</li> <br/>';

            }
        }
    });
  }


}
