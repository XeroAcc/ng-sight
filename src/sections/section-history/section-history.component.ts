import { Component, OnInit } from '@angular/core';
import { Upload } from '../../app/shared/upload';
import { User } from '../../app/shared/user';
import { ServicesDataService } from '../../app/services/services-data.service';


@Component({
  selector: 'app-section-history',
  templateUrl: './section-history.component.html',
  styleUrls: ['./section-history.component.css']
})
export class SectionHistoryComponent implements OnInit {

  constructor(private _servicesData: ServicesDataService) { }

  updates: History[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates(): void {
    this._servicesData.getUpdates(this.page, this.limit)
      .subscribe(res => {
        console.log('Result from getUpdates: ', res);
        this.updates = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;
      });
  }

  goToPrevious(): void {
    // console.log('Previous Button Clicked!');
    this.page--;
    this.getUpdates();
  }

  goToNext(): void {
    // console.log('Next Button Clicked!');
    this.page++;
    this.getUpdates();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getUpdates();
  }
}
