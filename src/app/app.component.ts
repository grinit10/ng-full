import { Server } from './server';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // servers: Server[] = [];
  servers = [
    // new Server('Test Server', 10),
    // new Server('Lufe Server', 100)
  ];
  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.serversService.getServers().subscribe(
      rspns => rspns.map(srvr => this.servers.push(srvr)),
      err => alert(err.message),
      () => console.log(this.servers)
    );
  }

  onAddServer(name: string) {
    this.serversService.saveServer(new Server(name, 50)).subscribe(
      msg => console.log(msg),
      err => console.log(err),
      () => console.log('Server save completed')
    );
  }

}
