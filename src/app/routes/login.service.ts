import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from 'src/environment';
import { NotifierService } from '../services/notifier.service';
import { LoginInput } from '../interfaces/input/login-input';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private notifier: NotifierService
  ) {}

  login(login: LoginInput) {
    return this.http.post(`${environment.api}/auth/login`, login);
  }

  verifyToken() {
    return this.http.post(
      `${environment.api}/auth/verifyToken`,
      localStorage.getItem('token')
    );
  }

  obterClaims() {
    return this.http.post(
      `${environment.api}/auth/obterClaims`,
      localStorage.getItem('token')
    );
  }

  isLogin() {
    this.verifyToken().subscribe(
      (res) => {},
      (err) => {
        this.notifier.showWarning('Sessão expirada, faça login novamente');
        this.logout();
      }
    );

    if (localStorage.getItem('token') != null) {
      return true;
    }

    return false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['cms/login']);
  }
}
