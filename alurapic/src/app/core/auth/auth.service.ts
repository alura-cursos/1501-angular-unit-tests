import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { environment } from './../../../environments/environment';

const API_URL = environment.ApiURL;

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(userName: string, password: string) {
    return this.httpClient
      .post(
        `${API_URL}/user/login`,
        {
          userName,
          password
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token');
          this.userService.setToken(authToken);
        })
      );
  }
}
