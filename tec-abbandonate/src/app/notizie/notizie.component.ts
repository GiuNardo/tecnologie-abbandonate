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
    document.getElementById("input").placeholder = "Tecnologia...";
    document.getElementById("content").innerHTML = 
            '<style>'+/*
                '.img { text-align: center; padding-top: 10px; margin:auto; width:100%; padding:auto;}' +
                '#elemento-archivio { list-style:none;border: 2px solid  #d9d9d9; border-radius: 20px; text-align:center; padding:20px;}' +
                '.container-fluid{ padding: 50px!important; }'+
                '.data-col{ text-align:center!important;margin: auto; width:100%}'+ 
                '.cell-title{ color: var(--main-color); font-size: 1.2em; letter-spacing: 1px; font-weight: 700; padding-left: 50px; }' +
                '.cell{vertical-align: text-center!important; text-align:center;}' +
                '.row{ margin-top: 10px; }' +
                '#descrizione { margin-right: 20px; margin-bottom: 10px; }' +
                '.data-col{ margin:auto; margin: 40px;}'+
                //'.main-row{ margin-top: 40px; border-bottom: 2px solid grey; padding: 20px; }' +
                */
               '.cell-title{ color: #ffffff; font-size: 1.2em; letter-spacing: 1px; font-weight: 700; }' +
               'row{text-align:center}'+ 
               'main-row{ text-align:center!important, margin:auto}'+
               'row{display:inline!important}'+
               '#elemento-archivio { list-style:none;background-color: rgba(248,181,0,0.5); text-align:center; padding:20px;}' +
            '</style>';

    this.data.forEach(d => {
            if(d.name.toLocaleLowerCase().includes(this.tec.toLocaleLowerCase())){
            
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
                        '<div class="row">' +
                            '<div class="cell-title"> Nome: </div>' +
                            '<div class=""><b>' + d.name + '</b></div>' +
                        '</div>' +
                        '<div class="myP">'+
                       
                       ' <a href="https://www.repubblica.it/politica/2019/05/27/news/europee_reazioni-227309862/?ref=RHPPTP-BH-I227211995-C6-P3-S1.6-F6">'+
                          ' Second text</a> block'+
                   '   </div>'+                        
                      
                        
                      
                    '</div>' + 
            '</li> <br/>';
            
        }else{
           
            
                document.getElementById("content").innerHTML += 
                '<li id="elemento-archivio">'+
                    '<div class="row main-row" >' +
                            '<div class="row">' +
                                '<div class="cell-title"> Nome: </div>' +
                                '<div class=""><b>' + d.name + '</b></div>' +
                            '</div>' +
                                               
                          
                            
                          
                        '</div>' + 
                '</li> <br/>';
                document.getElementById("a").href = 'https://bari.repubblica.it/cronaca/2019/05/27/news/comunali_a_bari_al_via_lo_spoglio_decaro_pd_spera_nel_bis_al_primo_turno_nonostante_la_valanga_gialloverde_alle_europee-227329634/';
         
        }
    });
  }

}
