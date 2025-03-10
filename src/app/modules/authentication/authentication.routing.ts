import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/features/page-login/login/login.component';
import { LoginGuardService } from 'src/app/guards/login-guard.service';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'login',
      //   component: LoginComponent,
      //   pathMatch: 'full',
      // },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
        // canActivate: [LoginGuardService],
      },
    ],
  },

];
