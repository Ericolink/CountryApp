import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../add-character/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
  }]
  @Output()
  public onDelete: EventEmitter<number>= new EventEmitter();


  onDeleteCharacter(index:number): void {
    //TODO Emitir el ID del personaje
    this.onDelete.emit(index);
  }
}
