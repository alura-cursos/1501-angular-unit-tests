import { Injectable } from '@angular/core';
import * as jws_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from './../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jws_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.userName = '';
    //não limpou o userName
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
