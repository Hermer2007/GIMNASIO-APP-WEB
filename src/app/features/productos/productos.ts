import { Component, inject, OnInit, signal } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../service/equipo-service';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-productos',
  imports: [Navbar],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {

  private equipoService = inject(EquipoService);

  equipos = signal<Equipo[]>([]);

  ngOnInit(): void {
    this.equipoService.obtenerEquipos().subscribe(datos => {
      console.log(datos);
      this.equipos.set(datos.equipos);
    });
  }
}