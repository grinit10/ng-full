import { Server } from './server';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable()
export class ServersService {
  constructor(private http: HttpClient) {
  }

  saveServer(server: Server) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://angularauth-46af2.firebaseio.com/servers.json',
      server,
      { headers: headers });
  }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>('https://angularauth-46af2.firebaseio.com/servers.json');
  }
}
