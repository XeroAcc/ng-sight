import { Component, OnInit } from '@angular/core';
import { ServicesDataService } from '../../app/services/services-data.service';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.css']
})
export class SectionServicesComponent implements OnInit {

  servicesDataByUser: any;
  servicesDataByState: any;


  constructor(private _servicesDataService: ServicesDataService) { }

  ngOnInit() {
    this._servicesDataService.getUpdatesByState().subscribe(res => {
      this.servicesDataByState = res;
    });

    this._servicesDataService.getUpdatesByUser(5).subscribe(res => {
      this.servicesDataByUser = res;
    });
  }

}
