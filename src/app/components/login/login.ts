import { Component, NgZone } from '@angular/core';
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
    private route: ActivatedRoute,
    private zone: NgZone
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

      const res = await window.electronAPI!.http.login(endPoints.auth.login, this.user);
      if (!res.success) {
        const status = res.status || 'N/A';
        const message = res.message || 'Error desconocido';

        let msg = 'Error de inicio de sesión';
        await Swal.fire(msg, `${status} <br> ${message}`, 'error');

      } else {
        console.log("here");
        this.router.navigate(['/home']).then(success => {
          console.log("Navigazione riuscita?", success); // Stampa true/false
          if (!success) {
            console.error("ERRORE DI ROUTING: navigazione fallita da Angular.");
          }
        });
      }

    }
  }

}
