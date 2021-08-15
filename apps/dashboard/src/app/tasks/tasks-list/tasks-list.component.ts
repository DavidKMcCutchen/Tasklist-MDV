import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '@tasklist/api-interfaces'

@Component({
  selector: 'tasklist-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent  {
  @Input() tasks: Task[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() create = new EventEmitter();
  @Output() deleted = new EventEmitter();  
}
