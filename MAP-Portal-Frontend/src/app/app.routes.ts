import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard';

import { Home } from './pages/home/home';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';
import { UploadFile } from './pages/upload-file/upload-file';

export const routes: Routes = [

  // Login page
  { path: 'login', component: LoginComponent },

  // Dashboard root
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: Home },
      { path: 'upload', component: UploadFile },
      { path: 'reports', component: Reports },
      { path: 'settings', component: Settings },

      // By Default,inside dashboard-> go to home
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  // Default route login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Fallback
  { path: '**', redirectTo: 'login' }
];
