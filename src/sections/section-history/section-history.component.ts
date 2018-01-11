import { Component, OnInit } from '@angular/core';
import { Upload } from '../../app/shared/upload';
import { User } from '../../app/shared/user';


@Component({
  selector: 'app-section-history',
  templateUrl: './section-history.component.html',
  styleUrls: ['./section-history.component.css']
})
export class SectionHistoryComponent implements OnInit {

  constructor() { }

  uploads: Upload[] = [
    {
      id: 1, stamp: new Date(2018, 1, 1), user:
        { id: 1, name: 'Maria Sky Sandova', email: 'marias123@gmail.com', province: 'ON' },
      bp: 140, hr: 95, qos: 8, bw: 1, bmi: 24, faq: 5, bomc: 6
    },
  ];

  ngOnInit() {
  }

}
