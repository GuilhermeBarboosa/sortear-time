import { Routes } from '@angular/router';
import { ExpiredTokenComponent } from 'src/app/errors/expired-token/expired-token.component';

export const ExpiredTokenRoutes: Routes = [
  {
    path: '',
    component: ExpiredTokenComponent
  }

];
