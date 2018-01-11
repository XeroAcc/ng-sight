import { Component, OnInit } from '@angular/core';
import { Server } from '../../app/shared/server';

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: true }
  { id: 2, name: 'dev-mail', isOnline: false }
  { id: 3, name: 'user-web', isOnline: true }
  { id: 4, name: 'user-mail', isOnline: true }
]

@Component({
  selector: 'app-section-system',
  templateUrl: './section-system.component.html',
  styleUrls: ['./section-system.component.css']
})
export class SectionSystemComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
