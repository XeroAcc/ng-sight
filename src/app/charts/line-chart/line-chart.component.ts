import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';
import { ServicesDataService } from '../../services/services-data.service';
import * as moment from 'moment';

//const LINE_CHART_SAMPLE_DATA: any[] = [
//  { data: [160, -50, 640, -200, 260, 150], label: 'ECG [μV]' },
//];

//const LINE_CHART_EPOCH_LABELS: string[] = ['P', 'Q', 'R', 'S', 'T', 'U'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private _servicesDataService: ServicesDataService) { }

  topUsers: string[];
  allUpdates: any[];

  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
    this._servicesDataService.getUpdates(1, 100).subscribe(res => {
      this.allUpdates = res['page']['data'];

      this._servicesDataService.getUpdatesByUser(3).subscribe(cus => {
        this.topUsers = cus.map(x => x['name']);

        const allChartData = this.topUsers.reduce((result, i) => {
          result.push(this.getChartData(this.allUpdates, i));
          return result;
        }, []);

        let dates = allChartData.map(x => x['data']).reduce((a, i) => {
          a.push(i.map(o => new Date(o[0])));
          return a;
        }, []);

        dates = [].concat.apply([], dates);
        // console.log('dates:', dates);

        const r = this.getUserUpdatesByStamp(allChartData, dates)['data'];
        console.log('r:', r);

        this.lineChartLabels = r[0]['updates'].map(o => o['upload']);

        this.lineChartData = [
          { 'data': r[0].updates.map(x => x.faq), 'label': r[0]['user'] },
          { 'data': r[1].updates.map(x => x.faq), 'label': r[1]['user'] },
          { 'data': r[2].updates.map(x => x.faq), 'label': r[2]['user'] }
        ];

      });
    });
  }

  getChartData(allUpdates: any, name: string) {
    const userUpdates = allUpdates.filter(o => o.user.name === name);
    // console.log('name:', name, 'userUpdates:', userUpdates);

    const formattedUpdates = userUpdates.reduce((r, e) => {
      r.push([e.stamp, e.faq]);
      return r;
    }, []);

    // console.log('formattedUpdates:', formattedUpdates);
    const result = { customer: name, data: formattedUpdates };

    // console.log('result:', result);
    return result;
  }

  getUserUpdatesByStamp(orders: any, dates: any) {
    // for each customer -> for each date =>
    // { data: [{'customer': 'XYZ', 'orders': [{ 'date': '17-11-25', total: 2421}, {}]}, {}, {}]}
    const users = this.topUsers;
    const prettyStamps = dates.map(x => this.toFriendlyDate(x));
    const u = Array.from(new Set(prettyStamps)).sort();
    // console.log(u);

    // define our result object to return:
    const result = {};
    const dataSets = result['data'] = [];

    users.reduce((x, y, i) => {
      // console.log('Reducing:', y, 'at index:', i);
      const userUpdates = [];
      dataSets[i] = {
        user: y, updates:
          u.reduce((r, e, j) => {
            const obj = {};
            obj['stamp'] = e;
            obj['faq'] = this.getUserStampFAQ(e, y); // sum total orders for this customer on this day
            userUpdates.push(obj);
            // console.log('Reducing:', e, 'at index:', j, 'customerOrders', customerOrders);
            return userUpdates;
          })
      };
      return x;
    }, []);

    return result;
  }

  toFriendlyDate(date: Date) {
    return moment(date).endOf('day').format('YY-MM-DD');
  }

  getUserStampFAQ(date: any, user: string) {
    const r = this.allUpdates.filter(o => o.user.name === user
      && this.toFriendlyDate(o.stamp) === date);

    const result = r.reduce((a, b) => {
      return a + b.faq;
    }, 0);

    return result;
  }

}
