import { Server } from './server';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return this.http.get<Server[]>('https://angularauth-46af2.firebaseio.com/servers.json')
      .pipe(map(rspns => {
        const servers: Server[] = [];
        const keys: any[] = Object.keys(rspns);
        keys.forEach(key => {
          servers.push(rspns[key]);
        });
        return servers;
      }));
  }
}
