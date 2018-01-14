import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../app/services/server.service';
import { Server } from '../../app/shared/server';
import { ServerMessage } from '../../app/shared/server-message';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';

//const SAMPLE_SERVERS = [
//  { id: 1, name: 'dev-web', isOnline: true },
//  { id: 2, name: 'dev-mail', isOnline: false },
//  { id: 3, name: 'user-web', isOnline: true },
//  { id: 4, name: 'user-mail', isOnline: true }
//]

@Component({
  selector: 'app-section-system',
  templateUrl: './section-system.component.html',
  styleUrls: ['./section-system.component.css']
})
export class SectionSystemComponent implements OnInit, OnDestroy {

  constructor(private _serverService: ServerService) { }

  servers: Server[];
  timerSubscription: AnonymousSubscription;

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  refreshData() {
    this._serverService.getServers().subscribe(res => {
      this.servers = res;
    });

    this.subscribeToData();
  }

  subscribeToData() {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  }

  sendMessage(msg: ServerMessage) {
    this._serverService.handleServerMessage(msg).subscribe(res => console.log('Message sent to server:', msg), err => console.log('Error:', err));
  }
}
