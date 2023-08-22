import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landingPage',
    loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'synchronize',
    loadChildren: () => import('./modules/login-register/login-register.module').then(m => m.LoginRegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

