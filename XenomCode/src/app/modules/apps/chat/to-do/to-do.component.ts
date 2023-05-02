import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/apps/chat/to-do/Todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {

  
  todos:Todo [];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [

    ]
  }

  toggleDone(id:number){
   this.todos.map((v, i) =>{
    if(i == id) v.completed = !v.completed;
    return v;
   })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) =>i !== id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false,
      srn:3
    });

    this.inputTodo = "";
  }

}

