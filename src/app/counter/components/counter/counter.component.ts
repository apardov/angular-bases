import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-counter',
    template: `<h1>Counter</h1>
    <h3>{{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    `
  }
) // Decorator
export class CounterComponent {
  public counter : number = 100;

  increaseBy(value : number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 100;
  }

}
