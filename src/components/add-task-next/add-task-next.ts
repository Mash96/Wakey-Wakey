import { Component } from '@angular/core';

/**
 * Generated class for the AddTaskNextComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-task-next',
  templateUrl: 'add-task-next.html'
})
export class AddTaskNextComponent {

  text: string;

  constructor() {
    console.log('Hello AddTaskNextComponent Component');
    this.text = 'Hello World';
  }

}
