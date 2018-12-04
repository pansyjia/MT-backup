import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Entry } from '../../models/entry';
import { Mood } from '../../models/mood';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';


@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})

export class ChartPage {
 

 @ViewChild('barChart') barChart;


 private entries: Entry[];
 public barChartEl: any;
 public chartLabels: any = [];
 public chartTips: any = [];
 public chartValues: any = [];
 public chartColours: any = [];
 public chartHoverColours: any = [];
 public chartLoadingEl: any;
 private happyCount: number;
 private angryCount: number;
 private sadCount: number;
 private okayCount: number;


constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private entryService: EntryDataServiceProvider) {

    this.entryService.getObservable().subscribe(
      (update) => {
          this.entries = this.entryService.getEntries();
         //  console.log(this.entries);
      //   console.log('this.entryService.getObservable().subscribe ');
      },
      (err) => {
      //   console.log('this.entryService.getObservable().subscribe :', err);
      });
    this.entries = this.entryService.getEntries();

this.happyCount = this.entryService.moodCount("happy");
this.angryCount = this.entryService.moodCount("angry");
this.sadCount = this.entryService.moodCount("sad");
this.okayCount = this.entryService.moodCount("okay");

  }

  ionViewDidLoad()
  {
     this.defineChartData();
     this.createBarChart();
  }

/**
    * Parse the JSON data, push specific keys into selected arrays for use with
    * each chart
    */
   defineChartData() : void
   {
      let k : any;
      for(k in this.entries)
      {
         var entry = this.entries[k];
         let thisMood = this.entryService.getMood(entry.mood);
         console.log("retrieved mood:", thisMood);
         this.chartTips.push(thisMood.type);
         this.chartLabels.push(entry.location);
         this.chartValues.push(thisMood.score);
         this.chartColours.push(thisMood.color);
         this.chartHoverColours.push(thisMood.hover);
      }
   }


   /**
    * Configure the Bar chart, define configuration options
    */
   createBarChart() : void
   {
      console.log("start...")
    this.barChartEl= new Chart(this.barChart.nativeElement,
      {
         type: 'horizontalBar',
         data: {
            labels: this.chartLabels,
            datasets: [{
               label: 'Mood Score',
               data: this.chartValues,
               duration: 2000,
               easing: 'easeInQuart',
               backgroundColor: this.chartColours,
               hoverBackgroundColor: this.chartHoverColours
            }]
         },
         options : {
            maintainAspectRatio: false,
            legend         : {
               display     : true,
               boxWidth    : 80,
               fontSize    : 15,
               padding     : 0
            },
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero:true,
                     stepSize: 20,
                     max : 100
                  }
               }],
               xAxes: [{
                  ticks: {
                     autoSkip: true
                  }
               }]
            }
         }
      });
      console.log("safe!")

   }



   
}




