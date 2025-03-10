import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../routes/login.service';
import { TokenJwtService } from '../services/token-jwt.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService {
  constructor(
    private loginService: LoginService,
    private token: TokenJwtService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    return this.verifyLogin(next, url);
  }
  verifyLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.loginService.isLogin()) {
      return true;
    }
    this.loginService.logout();
    return false;
  }
}
