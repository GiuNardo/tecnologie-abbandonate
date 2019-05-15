import { Component, OnInit, NgZone } from '@angular/core';
import * as d3 from 'd3';

import { DATA } from 'src/app/mock-data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  data = DATA;
  techs = [];
	categoria = 'all';

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {

    this.draw(this.techs);

  }

  draw(data : any) {
    //DISEGNA TUTTO IL GRAFICO DI NUOVO QUANDO CAMBIA LA CATEGORIA SCELTA

    this.data.map( d => {
			if(this.categoria =='all' ? true : d.category==this.categoria) {
        data.push(d);
      }
    });

    data.sort( (a,b) => {
      return b.yearTo - a.yearTo;
    });

    var margin = {top: 20, right: 20, bottom: 60, left: 200},
    width = 1150 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    var y = d3.scaleBand()
      .range([height, 0])
      .padding(0.1);

    var x = d3.scaleLinear()
      .range([0, width]);

    var svg = d3.select("#chartdiv").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    //INDICAZIONE SE NON CI SONO DATI DA MOSTRARE
    if(this.techs.length == 0) {
      svg.append('text')
        .text("NO DATA : Scegli un\'altra categoria")
        .attr('x', width/3)
        .attr('y', height/2)
        .style('font-weight', 'bold');
    }

    // Scale the range of the data in the domains
    x.domain([d3.min(data, d => d.yearFrom), d3.max(data, d => d.yearTo)] )
    y.domain(data.map(d => d.name));
    //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.yearFrom) )
        .attr("width", d => x(d.yearTo)-x(d.yearFrom) )
        .attr("y", d => y(d.name) )
        .attr("height", y.bandwidth())
        .style("fill", d => d.fill)
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
					document.getElementById("descr").innerHTML = d.description + "<div class='date'> from " + d.dateFrom + " to " + d.dateTo +"</div>";
					document.getElementById("icon").innerHTML = "<img class=\"smaller\" src=" + d.image + " />";
          document.getElementById("anteprima").style.display = "block";
          document.getElementById("timeline-container").className = "col-9";

					document.getElementById("item-descr").innerHTML = '<p>' + d.description + '</p>';
					document.getElementById("item-name").innerHTML = d.name;
					document.getElementById("year-from").innerHTML = ""+d.yearFrom;
					document.getElementById("year-to").innerHTML = ""+d.yearTo;

					document.getElementById("img-parent").innerHTML = "<img id=\'image\' src=" + d.image + "></img>"
					document.getElementById("image").style.height = '250px';

        });
        
    // add the x Axis
    svg.append("g")
      .attr('class','xaxis')
      .attr("transform", "translate(0," + height + ")")     
      .call(d3.axisBottom(x).tickFormat(t => t.toString()) )
      .selectAll('text')
        .attr('text-anchor', 'end')
        .attr('transform','rotate(-65)')
        .attr('font-size', '1.8em');
        
    // add the y Axis
    svg.append("g")
      .attr('class','yaxis')
      .call(d3.axisLeft(y))
      .selectAll("text")	
        .attr('font-size', '1.6em')
        .attr('font', 'Roboto');
        
  }

  onChosen(c : string) {
		this.categoria = c;
		//this.map.series.pop();
    this.techs = [];
    d3.select("#chartdiv").select('svg').remove();
		this.draw(this.techs);	
	}

}
