import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-admin-report',
  templateUrl: 'admin-report.html',
})
export class AdminReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminReportPage');
  }

//Chart 1

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Open'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Closed'}
  ];
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  //End Bar Chart 1

  //Begin Bar Chart 2
  public bar2ChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public bar2ChartLabels:string[] = ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  public bar2ChartType:string = 'bar';
  public bar2ChartLegend:boolean = true;
  
  public bar2ChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Open'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Closed'}
  ];
  
  // events
  public chart2Clicked(e:any):void {
    console.log(e);
  }
  
  public chart2Hovered(e:any):void {
    console.log(e);
  }


  //End Bar Chart 2



  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  public randomize2():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.bar2ChartData));
    clone[0].data = data;
    this.bar2ChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



  // Doughnut
public doughnutChartLabels:string[] = ['Open', 'Closed', 'In Progress','Escalated'];
public doughnutChartData:number[] = [4, 11, 10, 2];
public doughnutChartType:string = 'doughnut';

// events
public chartDonutClicked(e:any):void {
  console.log(e);
}

public chartDonutHovered(e:any):void {
  console.log(e);
}
}
