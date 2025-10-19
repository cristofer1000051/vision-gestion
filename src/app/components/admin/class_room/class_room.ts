import { Component } from '@angular/core';
import { Menu } from "../modules/menu/menu";
import { ClassRoomForm } from "../modules/class-room-form/class-room-form";

@Component({
  selector: 'app-class_room',
  imports: [Menu, ClassRoomForm],
  templateUrl: './class_room.html',
  styleUrl: './class_room.css'
})
export class ClassRoom {
    formTitle = '';
    formVisible = false;
    labelAction = '';
  openForm(flag: string) {
    if(flag === 'create') {
      this.formTitle = 'Crear Clase';
      this.labelAction = 'Crear nueva clase';
      this.formVisible = true;
    }else if(flag === 'modify') {
      this.formTitle = 'Modificar Clase';
      this.labelAction = 'Guardar cambios';
      this.formVisible = true;
    }
    
  }
  onFormClosed(){
    this.formVisible = false;
  }
}
