import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string [] = ["Spiderman","Hulk","She-Hulk","IronMan","Thor"]
  public deletedHero?:string;

  removeLastHero():void{
    //const deletedHero = this.heroNames.pop();
    this.deletedHero = this.heroNames.pop();
  }
}
