import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'nosotros',
    component: Nosotros
  }
];