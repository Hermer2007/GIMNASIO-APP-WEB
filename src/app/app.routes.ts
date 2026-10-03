import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';
import { Productos } from './features/productos/productos';
import { Registro } from './features/registro/registro';
import { Login } from './features/login/login';

import { canactivateguardGuard } from './guards/canactivateguard-guard-guard';

export const routes: Routes = [

  {
    path: '',
    component: Home,
    canActivate: [canactivateguardGuard]
  },

  {
    path: 'nosotros',
    component: Nosotros,
    canActivate: [canactivateguardGuard]
  },

  {
    path: 'productos',
    component: Productos,
    canActivate: [canactivateguardGuard]
  },

  {
    path: 'registro',
    component: Registro
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];