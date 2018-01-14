import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../../services/services-data.service';
import * as moment from 'moment';

//const SAMPLE_BARCHART_DATA: any[] = [
//  { data: [119, 140, 165, 164, 100, 121, 118], label: 'BP [Systolic]' },
//  { data: [71, 75, 66, 111, 88, 70, 70], label: 'Heart-Rate [bpm]' },
//  { data: [7, 7, 5, 9, 8, 6, 6], label: 'Quality of Sleep [hours]' }
//];

//const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _servicesDataService: ServicesDataService) { }

  updates: any;
  updateLabels: string[];
  updateData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this._servicesDataService.getUpdates(1, 100)
      .subscribe(res => {
        // console.log(res['page']['data']);
        const localChartData = this.getChartData(res);
        this.barChartLabels = localChartData.map(x => x[0]).reverse();
        this.barChartData = [{ 'data': localChartData.map(x => x[1]), 'label': 'Services' }];
      });
  }

  getChartData(res: Response) {
    this.updates = res['page']['data'];
    const data = this.updates.map(o => o.total);

    const formattedUpdates = this.updates.reduce((r, e) => {
      r.push([moment(e.placed).format('YY-MM-DD'), e.total]);
      return r;
    }, []);

    const p = [];

    const chartData = formattedUpdates.reduce((r, e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    return chartData;

    // const myData = [3, 4, 5].reduce((sum, value) => {
    //   console.log('sum:', sum, 'value:', value);
    //   return sum + value;
    // }, 0);
    // console.log('myData:', myData);

    // console.log(labels);
  }

}
