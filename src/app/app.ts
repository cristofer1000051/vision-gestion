import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./components/menu/menu";
import { Login } from "./components/login/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ Login]
})
export class App {
  protected readonly title = signal('vision-gestion');
}
