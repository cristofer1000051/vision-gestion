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

}
