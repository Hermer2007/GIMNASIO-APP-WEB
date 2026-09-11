import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../service/usuario-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  private usuarioService = inject(UsuarioService);

  listaUsuarios = signal<Usuario[]>([]);

  nuevoUsuario: Usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe(datos => {
      this.listaUsuarios.set(datos);
    });
  }

  registrarUsuario() {

    this.usuarioService
      .postUsuario(this.nuevoUsuario)
      .subscribe(() => {

        this.obtenerUsuarios();

        this.nuevoUsuario = {
          nombre: '',
          email: '',
          password: ''
        };

      });
  }
}