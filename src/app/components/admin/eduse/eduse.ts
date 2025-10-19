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
  modalTitle = '';
  actionLabel = '';

  openModal(action: string) {
    if(action === 'create') {
      this.modalTitle = 'Crear servicio';
    }else if(action === 'modify') {
      this.modalTitle = 'Modificar servicio';
    }
  }

}
