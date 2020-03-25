import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.serverLogURL;

@Injectable({ providedIn: 'root' })
export class ServerLoginService {
  constructor(private httpClient: HttpClient) {}

  log(serverLog: ServerLog) {
    return this.httpClient.post(`${API}/infra/log`, serverLog);
  }
}
