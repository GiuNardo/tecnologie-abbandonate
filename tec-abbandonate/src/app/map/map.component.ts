import { Component, NgZone, Output } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { DATA } from '../mock-data';
import {AUTHORS} from '../mock-authors';
import animateScrollTo from 'animated-scroll-to';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

	constructor(private zone : NgZone) { }

	private chart: am4charts.XYChart;
	private map: am4maps.MapChart;
	data = DATA;
	aut = AUTHORS;
	yearInUse = 2010;
	techs = [];
	categoria = 'all';
	anteprima : string;

	ngAfterViewInit() {

		animateScrollTo(document.querySelector("#main2"));

		this.zone.runOutsideAngular(() => {
			let map = am4core.create("chartdiv", am4maps.MapChart);

			map.geodata = am4geodata_worldLow;
			map.projection = new am4maps.projections.Miller();
			
			//map.seriesContainer.draggable = false;
			//map.seriesContainer.resizable = false;
			map.maxZoomLevel = 8;

			var polygonSeries = new am4maps.MapPolygonSeries();
			polygonSeries.useGeodata = true;
			polygonSeries.exclude = ["AQ"];
			map.series.push(polygonSeries);
			let polygonTemplate = polygonSeries.mapPolygons.template;
		
			polygonTemplate.fill = am4core.color("#3F3F3F");
			polygonTemplate.strokeOpacity = 0.5;
			polygonTemplate.nonScalingStroke = true;
			polygonTemplate.propertyFields.fill = "fill";

			// TO SEE COUNTRY NAMES AND COLOR HOVERS
			//let hs = polygonTemplate.states.create("hover");
			//hs.properties.fill = am4core.color("#7A7A7A");

			// MARKERS
			this.draw(map);

			//UI ELEMENTS TO CONTROL ZOOM AND RECENTER MAP
			var zoomControl = new am4maps.ZoomControl();
			map.zoomControl = zoomControl;
			zoomControl.slider.height = 200;
			zoomControl.fill = am4core.color("#000000");

			let home = map.chartContainer.createChild(am4core.Button);
			home.label.text = "Reset zoom";
			home.align = "center";
			home.events.on("hit", function(ev) {
				map.goHome();
			});

			this.map = map;
		})

	}

	draw(map : am4maps.MapChart) {

		let imageSeries = map.series.push(new am4maps.MapImageSeries());
		let imageSeriesTemplate = imageSeries.mapImages.template;

		let circle = imageSeriesTemplate.createChild(am4core.Circle);
		circle.radius = 5;
		circle.propertyFields.fill = "fill";
		circle.opacity = 1;
		circle.stroke = am4core.color("white");
		circle.cursorOverStyle = am4core.MouseCursorStyle.pointer;

		this.data.map( d => {
			if(
				(this.categoria =='all' ? true : d.category==this.categoria) && (
					//quelli che iniziano prima e finiscono fopo il decennio selezionato
					//es: 1970 == anni 70
					//e quelli che iniziano dopo ma non oltre la fine del decennio
					//es: quelli che iniziano tra il 1970 e il 1979
					(d.yearFrom <= this.yearInUse && d.yearTo >= this.yearInUse)
					|| (d.yearFrom >= this.yearInUse && d.yearFrom < this.yearInUse+10)
				))
			{	
				this.techs.push(d);
			}
		});

		//WHAT PARAMETERS USE AS POSITION ON THE MAP
		imageSeriesTemplate.propertyFields.latitude = "latitude";
		imageSeriesTemplate.propertyFields.longitude = "longitude";

		imageSeriesTemplate.horizontalCenter = "middle";
		imageSeriesTemplate.verticalCenter = "middle";
		imageSeriesTemplate.align = "center";
		imageSeriesTemplate.valign = "middle";
		imageSeriesTemplate.width = 8;
		imageSeriesTemplate.height = 8;
		imageSeriesTemplate.nonScaling = true;
		//imageSeriesTemplate.scale = 0.8;
		imageSeriesTemplate.tooltipHTML = "<b>{name}</b> <br/> di: {author}";
		imageSeriesTemplate.fill = am4core.color("#000000");
		imageSeriesTemplate.background.fillOpacity = 0;
		imageSeriesTemplate.background.fill = am4core.color("#ffffff");
		imageSeriesTemplate.setStateOnChildren = true;
		imageSeriesTemplate.states.create("hover");

		let a = this.data;
		let aut = this.aut;
		imageSeriesTemplate.events.on("hit", function(ev) {
			a.map( d => {
				if(d.longitude == ev.target.longitude && d.latitude == ev.target.latitude) {
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
						if (t.name == d.author){
							document.getElementById("author-name").innerHTML = "<b>" + t.name + " " + t.surname + "</b>";
							document.getElementById("author-date").innerHTML = "" + t.dataOfBirth;
							document.getElementById("author-descr").innerHTML = "" + t.description;
							document.getElementById("author-img-parent").innerHTML = "<img id=\'author-image\' src=" + t.logo + "></img>"

							document.getElementById("author-image").style.maxWidth = '300px';
							document.getElementById("author-image").style.maxHeight = '300px';
						}
					})
				}
			})
		})
		imageSeries.data = this.techs;
	}

	onChosen(c : string) {
		this.categoria = c;
		this.map.series.pop();
		this.techs = [];
		this.draw(this.map);	
	}

	onChanged(y : number) {
		this.yearInUse = y;
		this.map.series.pop();
		this.techs = [];
		this.draw(this.map);	
	}

	ngOnDestroy() {
		this.zone.runOutsideAngular(() => {
			if(this.chart) {
				this.chart.dispose();
			}
		})
	}

	scrollUp(e: Event){
		animateScrollTo(document.querySelector("#main2"));
	}

}