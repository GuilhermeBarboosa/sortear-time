import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { LoginService } from '../routes/login.service';
import { NotifierService } from '../services/notifier.service';
import { TokenJwtService } from '../services/token-jwt.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuardService {
  constructor(
    private loginService: LoginService,
    private router: Router,
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

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): Observable<boolean> {
    return this.loginService.verifyToken().pipe(
      switchMap(() => {
        let idEdit = route.params['id'];

        return this.loginService.obterClaims().pipe(
          switchMap(async (res) => {
            let response = JSON.parse(JSON.stringify(res));
            let idLogin = response.id;
            let userRole = await this.token.getRole();

            if (userRole === 'ADMIN') {
              return true;
            } else {
              if (idLogin == idEdit) {
                return true;
              } else {
                // history.go(-1);
                console.log("Profile");
                this.notifier.showError(
                  'Você não tem permissão para acessar essa página'
                );
                return false;
              }
            }
          })
        );
      })
    );
  }
}
