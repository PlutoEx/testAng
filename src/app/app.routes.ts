import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'requests',
    loadChildren: () => import('./pages/requests/requests.module').then(m => m.RequestsModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
  }
];
