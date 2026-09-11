import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Nosotros } from './features/nosotros/nosotros';
import { Productos } from './features/productos/productos';
import { Registro } from './features/registro/registro';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'nosotros',
    component: Nosotros
  },
  {
    path: 'productos',
    component: Productos
  },
  {
    path: 'registro',
    component: Registro
  }
];