import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  // Variables quemadas
  test: string = 'Test';
  // list: Array<string> = [
  //   'Instalar el Angular CLI',
  //   'Crear proyecto',
  //   'Crear componentes',
  // ];

  list = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ]);

  input: string = '';

  // Modalidad Reactiva
  // name = signal('Deivi');
  name = signal('Deivi');
  age = signal(20);
  img = signal('https://w3schools.com/howto/img_avatar.png');

  // Objeto con reactividad
  person = signal({
    name: 'Deivi',
    age: 20,
    avatar: 'https://w3schools.com/howto/img_avatar.png',
  });

  // FUNCIONES

  clickHandlerOne = () => {
    alert('Hizo clic una vez');
  };

  clickHandlerTwo = () => {
    alert('Hizo clic dos veces');
  };

  changeHandler = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  };

  keyDownHandler = (event: KeyboardEvent) => {
    const input = event.target as HTMLInputElement;
    this.input = input.value;
  };

  clickCombinationHandler = () => {
    alert('Combinación Shift + T');
  };

  colorCtrl = new FormControl();
  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
