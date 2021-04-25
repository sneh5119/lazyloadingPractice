import { Component, OnInit } from '@angular/core';

interface Todos {
  id?: number;
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  todos: Todos[];
  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = this.getTodos()
    const id = 2;
    const title = 'Todo 12';
    const description = 'Description updated.';
    this.todos = this.todos.map(todo => {
      return {
        ...todo,
        title: todo.id === 2 ? title : todo.title,
        description: todo.id === 2 ? description : todo.description,
      }
    });
  }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Todo 1',
        description: 'Lorem ipsum ada'
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'Lorem ipsum ada'
      },
      {
        id: 3,
        title: 'Todo 3',
        description: 'Lorem ipsum ada'
      },
      {
        id: 4,
        title: 'Todo 4',
        description: 'Lorem ipsum ada'
      },
      {
        id: 5,
        title: 'Todo 5',
        description: 'Lorem ipsum ada'
      }
    ];
  }
}
