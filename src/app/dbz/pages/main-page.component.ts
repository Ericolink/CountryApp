import { Component } from '@angular/core';
import { Character } from '../components/add-character/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor (private dbzService: DbzService) {}
  get characters(): Character[]{
    return [...this.dbzService.characters];
  }
  onDeleteCharacter (id: number ): void {
    this.dbzService.onDeleteCharacter;
  }
  addNewCharacter ( character:Character){
    this.dbzService.addCharacter ( character );
  }
}
