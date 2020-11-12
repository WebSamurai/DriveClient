import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/main/main.component';


const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./features/user-login-management/login-management.module').then(m => m.LoginManagementModule),
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
