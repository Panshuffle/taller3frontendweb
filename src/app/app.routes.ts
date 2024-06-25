import { Routes } from '@angular/router';
import { LoginComponent } from './_pages/login/login.component';
import { RegisterComponent } from './_pages/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
