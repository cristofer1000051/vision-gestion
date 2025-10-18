import { Component } from '@angular/core';
import { Menu } from '../modules/menu/menu';


@Component({
  selector: 'app-dashboard',
  imports: [Menu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
