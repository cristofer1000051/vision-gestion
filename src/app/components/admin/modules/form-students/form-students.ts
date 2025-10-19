import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-students',
  imports: [],
  templateUrl: './form-students.html',
  styleUrl: './form-students.css'
})
export class FormStudents {
  @Input() title : string = '';
  @Input() action : string = '';
  @Output() formClosed = new EventEmitter<void>();

  formClosedStudent() {
    this.formClosed.emit();
  }
}
