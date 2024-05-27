import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { TaskModel } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

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

  changeHandler = () => {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
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
