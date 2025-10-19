import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-eduse',
  imports: [],
  templateUrl: './modal-eduse.html',
  styleUrl: './modal-eduse.css'
})
export class ModalEduse {
  @Input() modalTitle = '';
  actionLabel = '';

}
