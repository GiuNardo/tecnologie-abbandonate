import { Component, OnInit } from '@angular/core';
import { DATA } from '../mock-data';
import { element, elementStyleProp } from '@angular/core/src/render3';

@Component({
  selector: 'app-notizie',
  templateUrl: './notizie.component.html',
  styleUrls: ['./notizie.component.css']
})
export class NotizieComponent implements OnInit {

  constructor() { }
    
  data = DATA;
  tec ='';

  ngOnInit() {
      this.createContent();
  }
  
  onChange(tec:string){
    this.tec = tec;
    this.createContent();
  }

  createContent(){
    document.getElementById("cerca").innerHTML = "Cerca per tecnologia";
    document.getElementById("input").style.width = "40%";
    document.getElementById("notizie-content").innerHTML = 
      '<style>'+
        '.container-fluid{ padding: 50px!important; }'+
        '.cell-title{  color: #f8b500; font-size: 1.2em; letter-spacing: 1px; font-weight: 700;}' +
        '.article{height: 200px; margin-top:20px; border: 1px solid grey; overflow: scroll; text-align:center; padding:20px;background-color: #ffff;}' +
        '.inner-article{margin-top:10px;}'+
      '</style>';
      
    this.data.forEach(d => {
      
      if(d.name.toLocaleLowerCase().includes(this.tec.toLocaleLowerCase())) {
    
        document.getElementById("notizie-content").innerHTML += 
          '<div class="article">Articoli riguardanti: <span class="cell-title"> '+ d.name +'</span>'+
            '<div class="inner-article" id="'+d.id+'" style=" text-align: left; margin-left: 50px;">'+
            '</div>'+
          '</div>';
        
        var news = '';

        d.notizie.forEach(n => {
          news +=
              '<b style="margin-right:10px;">'+ n.sito+' </b> <a href="'+ n.link + '"> ' + n.name + '</a><br/>';
        });

        document.getElementById(d.id.toString()).innerHTML += news;

      };
    })

  }

}
