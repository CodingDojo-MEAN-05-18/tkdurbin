import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
// implements OnInit {
  @Input() myTasks: Task[];
  @Output() aTaskEventEmitter = new EventEmitter();
  constructor() { }
  triggerEvent() {
    //  3 Emit the Event
 this.aTaskEventEmitter.emit(7);

  // ngOnInit() {
   }

}
