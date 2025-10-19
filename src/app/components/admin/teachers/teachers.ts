import { Component } from '@angular/core';
import { Menu } from "../modules/menu/menu";
import { FormTeachers } from "../modules/form-teachers/form-teachers";


@Component({
  selector: 'app-teachers',
  imports: [Menu, FormTeachers],
  templateUrl: './teachers.html',
  styleUrl: './teachers.css'
})
export class Teachers {
  formVisible = false;
  formTitle = '';
  labelAction = '';

  openForm(flag: string) {
    if (flag === 'create') {
      this.formTitle = 'Crear Profesor';
      this.labelAction = 'Crear nuevo Profesor';
    } else if (flag === 'modify') {
      this.formTitle = 'Modificar Profesor';
      this.labelAction = 'Guardar cambios';
    }
    this.formVisible = true;
  }

  formClosedTeachers() {
    this.formVisible = false;
  }

}
