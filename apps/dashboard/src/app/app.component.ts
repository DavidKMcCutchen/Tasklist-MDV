import { Component } from '@angular/core';


@Component({
  selector: 'tasklist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'TaskList';
  links= [
    {path:'', icon: 'home', title: 'Home'},
    {path: '/tasks', icon: 'view_list', title: 'Tasks'}
  ]
  
}
