import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {

  constructor() { }

  pieChartData: number[] = [20, 20, 20, 20, 15, 15, 10];
  pieChartLabels: string[] = ['Stage 1: No Cognitive Decline', 'Stage 2: Mild Cognitive Decline', 'Stage 3: Mild Cognitive Decline', 'Stage 4: Moderate Cognitive Decline', 'Stage 5: Moderately Severe Cognitive Decline', 'Stage 6: Severe Cognitive Decline (middle dementia)', 'Stage 7: Very Severe Cognitive Decline'];
  colors: any[] = [
    {
      backgroundColor: ['#FFE5CC', '#ff6b6b', '#ffd166', '#009900', '#66B2FF', '#990099', '#26547c']
    }
  ];

  pieChartType = 'doughnut';

  ngOnInit() {
  }

}
