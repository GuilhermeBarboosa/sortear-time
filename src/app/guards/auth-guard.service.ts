import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { roles } from 'src/app/const/roles';
import { LoginService } from '../routes/login.service';
import { NotifierService } from '../services/notifier.service';
import { TokenJwtService } from '../services/token-jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    private loginService: LoginService,
    private notifier: NotifierService,
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
    return this.checkUserLogin(next, url);
  }

  async checkUserLogin(
    route: ActivatedRouteSnapshot,
    url: any
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if (!this.token.isTokenExpired(this.token.getToken())) {
        try {
          let userRole = await this.token.getRole();
          let permission = false;
          console.log('aqui');
          if (userRole === roles.ROLE_ADMIN) {
            console.log('chegou');
            permission = true;
            resolve(true);
          }
        } catch (error) {
          this.loginService.logout();
          resolve(false);
        }
      } else {
        this.loginService.logout();
        resolve(false);
      }
    });
  }
}
