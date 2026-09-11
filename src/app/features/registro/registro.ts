import { Component } from '@angular/core';
import { Formulario } from '../../shared/formulario/formulario';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-registro',
  imports: [Navbar, Formulario],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {}