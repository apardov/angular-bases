import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character-interface';
import { Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string): void{
    if(!id) return;
    console.log('onDeleteCharacter', id);
    this.onDelete.emit(id);
  }
}
