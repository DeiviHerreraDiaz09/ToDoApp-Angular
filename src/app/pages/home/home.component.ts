import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  list = signal<TaskModel[]>([
    {
      id: Date.now(),
      tittle: 'Instalar el Angular CLI',
      completed: false,
    },
    {
      id: Date.now(),
      tittle: 'Crear proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      tittle: 'Crear componentes',
      completed: false,
    },
    {
      id: Date.now(),
      tittle: 'Crear servicio',
      completed: false,
    },
  ]);

  addTask = (tittle: string) => {
    const newTask = {
      id: Date.now(),
      tittle: tittle,
      completed: false,
    };
    this.list.update((list) => [...list, newTask]);
  };

  changeHandler = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  };

  deleteTask = (index: number) => {
    this.list.update((list) =>
      list.filter((list, position) => position !== index)
    );
  };

  updateTask = (index: number) => {
    this.list.update((list) => {
      return list.map((list, position) => {
        if (position == index) {
          return {
            ...list,
            completed: !list.completed,
          };
        }
        return list;
      });
    });
  };
}
