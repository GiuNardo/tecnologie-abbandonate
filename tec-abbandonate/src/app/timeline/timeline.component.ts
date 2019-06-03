import { Component, OnInit, NgZone } from '@angular/core';
import * as d3 from 'd3';

import { DATA } from '../mock-data';
import { AUTHORS } from '../mock-authors';

import animateScrollTo from 'animated-scroll-to';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  data = DATA;
  aut = AUTHORS;
  techs = [];
	categoria = 'all';

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    animateScrollTo(document.querySelector("#main2"));
    this.techs = this.shuffle(this.data);
    this.draw(this.techs, this.aut);
  }

  draw(tec : any, aut : any) {
    /*
      tec.sort( (a,b) => {
        return a.yearFrom - b.yearFrom;
      });
    */

    var margin = {top: 30, right: 20, bottom: 10, left: 200},
    width = 950 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

    var y = d3.scaleBand()
      .range([height, 0])
      .padding(0.1);

    var x = d3.scaleLinear()
      .range([0, width]);

    var svg = d3.select("#chartdiv").append("svg")
      .attr('class', 'grafico')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
    // Scale the range of the data in the domains
    x.domain([d3.min(tec, d => d.yearFrom), d3.max(tec, d => d.yearTo)] )
    y.domain(tec.map(d => d.name));
    //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(tec)
      .enter().append("rect")
        .attr("rx", 7)
        .attr("ry", 7)
        .attr("class", "bar")
        .attr("x", d => x(d.yearFrom) )
        .attr("width", d => x(d.yearTo)-x(d.yearFrom) )
        .attr("y", d => y(d.name) )
        .attr("height", y.bandwidth())
        .style("fill", d => (d.category != this.categoria && this.categoria!='all') ? '#555358' : d.fill)
        .style("opacity", d => (d.category != this.categoria && this.categoria!='all') ? 0.2 : 1)
        .on("mouseover", function(d) { 
        //DUE LINEE UNA PRIMA E UNA DOPO SENNò QUANDO DISEGNI LA LINEA SOPRA IL RETTANGOLO
        //SI BUGGA COL MOUSE OVER (NON SEI PIù SOPRA IL RETTANGOLO MA SOPRA LA LINEA, QUINDI LAMPEGGIA)
          svg.append('line')
            .attr('x1', 0)
            .attr('y1', (parseInt(d3.select(this).attr('y')) + parseInt(d3.select(this).attr('height'))/2))
            .attr('x2', x(d.yearFrom))
            .attr('y2', (parseInt(d3.select(this).attr('y')) + parseInt(d3.select(this).attr('height'))/2))
            .attr('stroke', d.fill)
            .attr('opacity', '1')
            .attr('class', 'linea1');
          svg.append('line')
            .attr('x1', x(d.yearTo))
            .attr('y1', (parseInt(d3.select(this).attr('y')) + parseInt(d3.select(this).attr('height'))/2))
            .attr('x2', width)
            .attr('y2', (parseInt(d3.select(this).attr('y')) + parseInt(d3.select(this).attr('height'))/2))
            .attr('stroke', d.fill)
            .attr('opacity', '1')
            .attr('class', 'linea2');
          d3.select('.yaxis')
            .selectAll('text')
            .filter(t=>t==d.name)
            .attr('font-weight', '700');
        })
        .on("mouseout", function(d) {
          //BISOGNA RIMUOVERE TUTTE E DUE LE LINEE       
          svg.select('.linea1')
            .remove();
          svg.select('.linea2')
            .remove();
          d3.select('.yaxis')
            .selectAll('text')
            .filter(t=>t==d.name)
            .attr('font-weight', '400');
        })
        .on("click", function(d){
          document.getElementById("item-container").innerHTML += 
            '<style>'+
                '#item-image { max-width: 400px; max-height: 320px;}' +
                //'#item-img-parent { text-align: center; }' +
                '.data-col{margin:auto; width:90%; margin-top: 30px; }'+ 
                '.cell-title{ color: #f8b500; font-size: 1.2em; letter-spacing: 1px; font-weight: 700; padding-left: 50px; }' +
                '.cell{vertical-align: text-top!important; text-align:left;}' +
                '.row{ margin-top: 10px; }' +
                '#item-descr { margin-right: 20px; margin-bottom: 10px; }' +
                '#item-video-parent{ float:right}'+
            '</style>';

					document.getElementById("anteprima").style.display = "block";
					document.getElementById("ant-name").innerHTML = '<span style="color:var(--main-color); font-weight:500">' + d.name + '<span>';
					document.getElementById("ant-descr").innerHTML = d.shortDescription + 
						"<br/> Da <b>" + d.dateFrom + "</b> a <b>" + d.dateTo + "</b>";
					document.getElementById("ant-icon").innerHTML = "<img width='100px' src=" + d.icon + " />";
					
					document.getElementById("item-descr").innerHTML = '<p>' + d.description + '</p>';
					document.getElementById("item-name").innerHTML = '<b>' + d.name + '</b>';
          document.getElementById("item-aut").innerHTML = d.author;
					document.getElementById("item-year-from").innerHTML = ""+d.yearFrom;
					document.getElementById("item-year-to").innerHTML = ""+d.yearTo;
					document.getElementById("item-img-parent").innerHTML = "<img id=\'item-image\' src=" + d.image + "></img>"
					
					if(d.spot!='') {
						document.getElementById("item-video-parent").innerHTML = 
							'<iframe width="560" height="315" src="' + d.spot + '? ' +
								'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' + 
							'</iframe>' 
					}

					aut.map(t=> {
						let confronta = t.surname=="" ? t.name : t.name+" "+t.surname;
						if (confronta == d.author){
							document.getElementById("author-name").innerHTML = "<b>" + t.name + " " + t.surname + "</b>";
							document.getElementById("author-date").innerHTML = "" + t.dataOfBirth;
							document.getElementById("author-descr").innerHTML = "" + t.description;
							document.getElementById("author-img-parent").innerHTML = "<img id=\'author-image\' src=" + t.logo + "></img>"

							document.getElementById("author-image").style.maxWidth = '300px';
							document.getElementById("author-image").style.maxHeight = '300px';
						}
          })
          
          animateScrollTo(document.querySelector("#timeline-container"));
        });
        
    // add the x Axis
    svg.append("g")
      .attr('class','xaxis')
      //.attr("transform", "translate(0,"+height+")")     
      .call(d3.axisTop(x).tickFormat(t => t.toString()) )
      .selectAll('text')
        .attr('text-anchor', 'end')
        //.attr('transform','rotate(-25)')
        .attr('font-size', '1.4em');
        
    // add the y Axis
    svg.append("g")
      .attr('class','yaxis')
      .call(d3.axisLeft(y))
      .selectAll("text")	
        .attr('font-size', '1.4em');
        
  }

  onChosen(c : string) {
		this.categoria = c;
    d3.select("#chartdiv").select('svg').remove();
		this.draw(this.data, this.aut);	
	}

  shuffle(array : any) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  scrollUp(e: Event){
		animateScrollTo(document.querySelector("#main2"));
		console.log("a");
	}

}
