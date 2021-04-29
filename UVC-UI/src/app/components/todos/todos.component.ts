import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  inputTodo:string = "";

  isChecked = true;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'UVC-Unit00',
        completed: false
      },
      {
        content: 'UVC-Unit01',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {

    this.todos[id].completed = !this.todos[id].completed
    console.log(id)
    // this.todos.map((v, i) => {
    //   if (i == id) v.completed = !v.completed;
    //   return v;
    // })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}