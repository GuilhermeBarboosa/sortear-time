import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cms',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      )
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./modules/errors/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      )
  },
  {
    path: '',
    redirectTo: 'cms/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
