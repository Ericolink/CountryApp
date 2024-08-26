import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  get heroDescription():string {
    return `${this.name} - ${ this.age }`;
  }
  changeHero():void{
    this.name="spiderman";
  }
  changeAge():void {
    this.age=25;
  }
  resetForm():void {
    //this.name= "ironman";
    this.age=45;
    //document.querySelectorAll('h1')!.forEach( element => {
    //  element.innerHTML = "<h1>Desde Angular</h1>";
    //});
  }

}
