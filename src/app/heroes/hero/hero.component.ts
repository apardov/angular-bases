import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nameHero: string = 'ironman';
  public age: number = 45;
  public realName: string = 'Tony Stark';

  get capitalizedName(): string {
    return this.nameHero.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nameHero} - ${this.age} - ${this.realName}`;
  }

  changeName(): void {
    this.nameHero = 'Spiderman';
    this.realName = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 30;
  }

}
