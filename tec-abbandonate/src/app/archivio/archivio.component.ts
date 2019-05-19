import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DATA } from 'src/app/mock-data';
import { createContentChild } from '@angular/compiler/src/core';
import { filter } from '@amcharts/amcharts4/.internal/core/utils/Iterator';

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
    document.getElementById("content").innerHTML = 
            '<style>'+
                'img { width: auto; max-height: 300px; }' +
                '.img { text-align: center; padding-top: 10px; }' +
                '#elemento-archivio { list-style:none;border: 2px solid  #d9d9d9; border-radius: 20px; }' +
                '.container-fluid{ padding: 50px!important; }'+
                '.data-col{ margin: auto; }'+ 
                '.cell-title{ color: var(--main-color); font-size: 1.2em; letter-spacing: 1px; font-weight: 700; padding-left: 50px; }' +
                '.cell{ margin-left: 30px; vertical-align: text-top!important; }' +
                '.row{ margin-top: 10px; }' +
                '#descrizione { font-size: 0.8em; margin-right: 20px; margin-bottom: 10px; }' +
                //'.main-row{ margin-top: 40px; border-bottom: 2px solid grey; padding: 20px; }' +
            '</style>';

    this.data.forEach(d => {
        if(this.category=="" || this.category=="all"){
            if(d.author.toLocaleLowerCase().includes(this.author.toLocaleLowerCase())){
            
                var link = '';
                if(d.spot!='') {
                    link = 
                        '<iframe width="560" height="315" src="' + d.spot + '? ' +
                            'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' + 
                        '</iframe>' 
                }

                document.getElementById("content").innerHTML += 
                '<li id="elemento-archivio">'+
                    '<div class="row main-row" >' +
                        '<div class="col-5 img">' +
                            '<img src="' + d.image + '">' +
                            '<p>' + d.license + '</p>' +
                        '</div>' +
                        '<div class="col-7 data-col">' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Name: </div>' +
                                '<div class="col cell text-justify"><b>' + d.name + '</b></div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> From: </div>' +
                                '<div class="col cell text-justify"><b>' + d.author + '</b></div>' +
                            '</div>' +
                            '<div class="row">' + 
                                '<div class="col-3 cell cell-title"> Since: </div>' +
                                '<div class="col-3 cell ">' + d.yearFrom + '</div>' +
                            '</div>' +
                            '<div class="row">' + 
                                '<div class="col-3 cell cell-title"> To: </div>' +
                                '<div class="col-3 cell ">' + d.yearTo + '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Description: </div>' +
                                '<div id="descrizione" class="col cell text-justify">' + d.description + ' </div>'+
                            '</div>' + 
                        '</div>' + 
                    '</div>'+
                '</li> <br/>';
            }
        }else{
            if(d.author.toLocaleLowerCase().includes(this.author.toLocaleLowerCase()) && this.category==d.category){
            
                document.getElementById("content").innerHTML += 
                '<li id="elemento-archivio">'+
                    '<div class="row main-row" >' +
                        '<div class="col-5 img">' +
                            '<img src="' + d.image + '">' + d.license +
                        ' </div>' +
                        '<div class="col-7 data-col">' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Name: </div>' +
                                '<div class="col cell text-justify"><b>' + d.name + '</b></div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> From: </div>' +
                                '<div class="col cell text-justify"><b>' + d.author + '</b></div>' +
                            '</div>' +
                            '<div class="row">' + 
                                '<div class="col-3 cell cell-title"> Since: </div>' +
                                '<div class="col-3 cell ">' + d.yearFrom + '</div>' +
                            '</div>' +
                            '<div class="row">' + 
                                '<div class="col-3 cell cell-title"> To: </div>' +
                                '<div class="col-3 cell ">' + d.yearTo + '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-3 cell cell-title"> Description: </div>' +
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
