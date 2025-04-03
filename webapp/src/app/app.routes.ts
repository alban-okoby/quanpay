import { Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { AccountComponent } from './pages/account/account.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { MyassurancesComponent } from './pages/myassurances/myassurances.component';
import { DevicesExchangesComponent } from './pages/devices-exchanges/devices-exchanges.component';
import { MycardsComponent } from './pages/mycards/mycards.component';
import { PersonnalFinancesComponent } from './pages/personnal-finances/personnal-finances.component';
import { Routes  as StaticRoute }  from './core/routes/routes';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

const staticRoutes : StaticRoute = new StaticRoute();
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
        path: staticRoutes.MY_ACCOUNTS, component: AccountComponent,
      },
      {
        path: staticRoutes.MY_ASSURANCES, component: MyassurancesComponent,
      },
      {
        path: staticRoutes.MY_CARDS, component: MycardsComponent,
      },
      {
        path: staticRoutes.MY_FINANCES, component: PersonnalFinancesComponent,
      },
      {
        path: staticRoutes.DEVISES_EXCHANGES, component: DevicesExchangesComponent,
      },
      {
        path: staticRoutes.MY_PROFILE, component: MyprofileComponent
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
