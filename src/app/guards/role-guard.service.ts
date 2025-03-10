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
export class RoleGuardService {
  constructor(
    private loginService: LoginService,
    private toast: NotifierService,
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
      if (!this.token.isTokenExpired(this.token.getToken())) {
        this.loginService.obterClaims().subscribe((data) => {
          var response = JSON.parse(JSON.stringify(data));

          if (response.role != roles.ROLE_ADMIN) {
            this.toast.showError('Você não possui permissão');
            window.location.reload();
            return false;
          } else {
            return true;
          }
        });
      }else{
        this.loginService.logout();
        return false;
      }
    }
    return false;
  }
}
