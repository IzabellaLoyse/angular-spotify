import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/app-login/app-login.module').then(
        (m) => m.AppLoginModule
      ),
  },

  {
    path: 'player',
    loadChildren: () =>
      import('./pages/app-player/app-player.module').then(
        (m) => m.AppPlayerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
