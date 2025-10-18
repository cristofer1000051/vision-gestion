import { Component } from '@angular/core';
import { Menu } from '../modules/menu/menu';
import { ModalEduse } from "../modules/modal-eduse/modal-eduse";


@Component({
  selector: 'app-eduse',
  imports: [Menu, ModalEduse],
  templateUrl: './eduse.html',
  styleUrl: './eduse.css'
})
export class Eduse {
  modifyFlag: boolean = false;
  modifyService() {
    this.modifyFlag = !this.modifyFlag;
  }
  createService() {
    this.modifyFlag = !this.modifyFlag;
  }
}
