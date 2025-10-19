import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-teachers',
  imports: [],
  templateUrl: './form-teachers.html',
  styleUrl: './form-teachers.css'
})
export class FormTeachers {
  @Input() title : string = '';
  @Input() action : string = '';
  @Output() formClosed = new EventEmitter<void>();

  formClosedTeachers() {
    this.formClosed.emit();
  }
}
