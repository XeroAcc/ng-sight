import { Injectable } from '../../../node_modules/@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesDataService {

  constructor(private _http: Http) { }

  getUpdates(pageIndex: number, pageSize: number) {
    return this._http.get('http://localhost:64699/api/history/' + pageIndex + '/' + pageSize)
      .map(res => res.json());
  }

  getUpdatesByUser(n: number) {
    return this._http.get('http://localhost:64699/api/history/byuser/' + n)
      .map(res => res.json());
  }

  getUpdatesByState() {
    return this._http.get('http://localhost:64699/api/history/bystate/')
      .map(res => res.json());
  }
}
