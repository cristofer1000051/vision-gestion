import { Component } from '@angular/core';
import { Menu } from "../modules/menu/menu";
import { FormStudents } from "../modules/form-students/form-students";
@Component({
  selector: 'app-students',
  imports: [Menu, FormStudents],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  formVisible = false;
  formTitle = '';
  labelAction = '';

  openForm(flag: string) {
    if (flag === 'create') {
      this.formTitle = 'Crear Estudiante';
      this.labelAction = 'Crear nuevo estudiante';
    } else if (flag === 'modify') {
      this.formTitle = 'Modificar Estudiante';
      this.labelAction = 'Guardar cambios';
    }
    this.formVisible = true;
  }

  formClosedStudent() {
    this.formVisible = false;
  }

}
