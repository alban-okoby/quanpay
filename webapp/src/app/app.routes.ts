import { Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { AccountComponent } from './pages/account/account.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: DashbordComponent,
      },
      {
        path: 'myaccounts', component: AccountComponent,
      },
    ]
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
