import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { DataService } from '../data.service';
import { DATA } from 'src/app/mock-data';
import { YEARFROM } from 'src/app/mock-data';
import { YEARTO } from 'src/app/mock-data';

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
	techs = [];

	ngAfterViewInit() {

		this.data.map( d => {
			if(d.yearFrom >= YEARFROM && d.yearTo <= YEARTO)
				this.techs.push(d);
		});

		this.zone.runOutsideAngular(() => {
			let map = am4core.create("chartdiv", am4maps.MapChart);

			map.geodata = am4geodata_worldLow;
			map.projection = new am4maps.projections.Miller();
			
			//map.seriesContainer.draggable = false;
			//map.seriesContainer.resizable = false;
			map.maxZoomLevel = 6;

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
			//polygonTemplate.tooltipText = "{name}";
			let hs = polygonTemplate.states.create("hover");
			hs.properties.fill = am4core.color("#7A7A7A");
			
			/* MANIPULATE ONLY CERTAIN COUNTRIES IN THE WORLD
			polygonSeries.data = [{
				"id": "US",
				"name": "United States",
				"value": 100,
				"fill": am4core.color("#F05C5C")
			}, {
				"id": "FR",
				"name": "France",
				"value": 50,
				"fill": am4core.color("#5C5CFF")
			}];
			*/
	
			// MARKERS
			let imageSeries = map.series.push(new am4maps.MapImageSeries());
			let imageSeriesTemplate = imageSeries.mapImages.template;

			let circle = imageSeriesTemplate.createChild(am4core.Circle);
			circle.radius = 5;
			circle.fill = am4core.color("#DD9933");
			circle.opacity = 1;
			circle.stroke = am4core.color("white");

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
			imageSeriesTemplate.tooltipText = "{name}";
			imageSeriesTemplate.fill = am4core.color("#0000");
			imageSeriesTemplate.background.fillOpacity = 0;
			imageSeriesTemplate.background.fill = am4core.color("#ffffff");
			imageSeriesTemplate.setStateOnChildren = true;
			imageSeriesTemplate.states.create("hover");

			imageSeries.data = this.techs;

			//UI ELEMENTS TO CONTROL ZOOM AND RECENTER MAP
			var zoomControl = new am4maps.ZoomControl();
			map.zoomControl = zoomControl;
			zoomControl.slider.height = 350;
			zoomControl.fill = am4core.color("#000000");

			let home = map.chartContainer.createChild(am4core.Button);
			home.label.text = "Center";
			home.align = "center";
			home.events.on("hit", function(ev) {
				map.goHome();
			});

			this.map = map;
		})
	}

	/*
	provaGrafico() { //rename ngAfterViewInit() to see chart
		this.zone.runOutsideAngular(() => {
			let chart = am4core.create("chartdiv", am4charts.XYChart);

			chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

			console.log(data);

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
			chart.scrollbarX = scrollbarX;
			
			this.chart = chart;
		})
	}
	*/

	ngOnDestroy() {
		this.zone.runOutsideAngular(() => {
			if(this.chart) {
				this.chart.dispose();
			}
		})
	}

}