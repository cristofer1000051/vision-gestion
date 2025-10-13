import { Component } from '@angular/core';
import { User } from '../../models/user.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { endPoints } from '../../endpoints/endpoints';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = new User();
  }
  async onSubmit() {
    if (!this.user.email || !this.user.password) {
      Swal.fire(
        'Error de validacion',
        'Username and password are required',
        'error'
      );

    } else {
      const api = window.electronAPI;
      if (api) {
        const res = await window.electronAPI!.http.post(endPoints.auth.login, this.user);
        if (!res.success) {
          const status =  res.status || 'N/A';
          const message = res.message || 'Error desconocido';

          let msg = 'Error de inicio de sesión';
          await Swal.fire(msg, `${status} <br> ${message}`, 'error');
        }
      } else {
        this.router.navigate(['/home']);
      }

    }
  }

}
