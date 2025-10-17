import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginUser } from '../../models/login-user.models';
import { LoginServices } from '../../services/login.services';
import { endPoints } from '../../endpoints/endpoints';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginUser: LoginUser;
  constructor(
    private router: Router,
    private loginService: LoginServices,
  ) {
    this.loginUser = new LoginUser();
  }
  async onSubmit() {
    if (!this.loginUser.email || !this.loginUser.password) {
      Swal.fire(
        'Error de validacion',
        'Username and password are required',
        'error'
      );

    } else {

      const res = await this.loginService.Login(endPoints.auth.login, this.loginUser);
      if (!res.success) {
        const status = res.status || 'N/A';
        const message = res.message || 'Error desconocido';

        let msg = 'Error de inicio de sesión';
        await Swal.fire(msg, `${status} <br> ${message}`, 'error');
      } else {
        this.router.navigate(['/home']).then(success => {
          if (!success) {
            console.error("ERRORE DI ROUTING: navigazione fallita da Angular.");
          }
        });
      }
    }
  }
}
