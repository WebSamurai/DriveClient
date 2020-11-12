import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./features/user-login-management/login-management.module').then(m => m.LoginManagementModule),
    data: { preload: true }
  }
  ,
  { path: '*', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
