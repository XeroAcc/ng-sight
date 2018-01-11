import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART2_DATA: any[] = [
  { data: [7, 7, 5, 9, 8, 6, 6], label: 'Quality of Sleep [hours]' }
];

const SAMPLE_BARCHART2_LABELS: string[] = ['01-JAN-2018', '02-JAN-2018', '03-JAN-2018', '04-JAN-2018', '05-JAN-2018', '07-JAN-2018', '08-JAN-2018'];
@Component({
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.css']
})
export class BarChart2Component implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART2_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART2_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
  }

}
