import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  constructor(private router: Router) {}
  goToEduse() {
    this.router.navigate(['/eduse']).then(success => {
      if (!success) {
        console.error("ERRORE DI ROUTING: navigazione fallita da Angular.");
      }
    });
  }
  goToClassRoom(){
    this.router.navigate(['/class-room']).then(success => {
      if (!success) {
        console.error("ERRORE DI ROUTING: navigazione fallita da Angular.");
      }
    });
  }
}
