import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/features/home/home.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { RouteData } from 'src/app/interfaces/input/rote-data';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuardService],
    data: {
      routeIdentifier: 'home',
    } as RouteData,
  },
];
