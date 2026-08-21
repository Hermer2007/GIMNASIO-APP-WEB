import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Hero } from '../../shared/hero/hero';
import { Maquinas } from '../../shared/maquinas/maquinas';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Maquinas],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}