import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/mock-data';

@Component({
  selector: 'app-notizie',
  templateUrl: './notizie.component.html',
  styleUrls: ['./notizie.component.css']
})
export class NotizieComponent implements OnInit {

  constructor() { }
    
  data = DATA;
  tec ="";

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
    document.getElementById("content").innerHTML = 
      '<style>'+
        '#elemento-archivio { list-style:none; text-align:center; padding:20px;background-color: #ffff;}' +
        '.container-fluid{ padding: 50px!important; }'+
        '.cell-title{  color: #f8b500; font-size: 1.2em; letter-spacing: 1px; font-weight: 700;}' +
        '.article{height: 100px; margin-top:20px; border: 1px solid grey; overflow: scroll;}' +
      '</style>';
      
    this.data.forEach(d => {
      if(d.name.toLocaleLowerCase().includes(this.tec.toLocaleLowerCase())){

        document.getElementById("content").innerHTML += 
          '<li id="elemento-archivio">'+
            '<div>Articoli riguardanti: <span class="cell-title"> '+ d.name +'</span></div>'+
            '<div class="article">A</div>'+
          '</li> <br/>';
      
      };
      
      (<HTMLLinkElement>document.getElementById("a")).href = 'https://bari.repubblica.it/cronaca/2019/05/27/news/comunali_a_bari_al_via_lo_spoglio_decaro_pd_spera_nel_bis_al_primo_turno_nonostante_la_valanga_gialloverde_alle_europee-227329634/';
         
    })
    
  }

}
