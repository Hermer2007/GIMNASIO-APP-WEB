import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../service/authentication-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  private authService = inject(AuthenticationService);
  private router = inject(Router);

  iniciarSesion() {

    this.authService
      .login(this.email, this.password)
      .subscribe(resultado => {

        if (resultado) {
          alert('Bienvenido al sistema');
          this.router.navigate(['/']);
        } else {
          alert('Correo o contraseña incorrectos');
        }

      });
  }
}