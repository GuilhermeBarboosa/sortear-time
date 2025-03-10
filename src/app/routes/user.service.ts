import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environment';
import { LoginInput } from '../interfaces/input/login-input';
import { UserInput } from '../interfaces/input/user-input';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  });

  urlUser = `${environment.api}/user`;
  urlAuth = `${environment.api}/auth`;

  getById(id: number) {
    return this.http.get(`${this.urlUser}/` + id, {
      headers: this.HttpHeaders,
    });
  }

  create(user: UserInput) {
    return this.http.post(`${this.urlUser}`, user, {
      headers: this.HttpHeaders,
    });
  }
}
