//item compponent
import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  template: `
  <ul>
  <li *ngFor="let i of items">
      {{i.name}}
      <p>{{i.description}}</p>
      </li>
      </ul>
      `,
  styleUrl: './item.component.css'
})
export class ItemComponent {
  items;
  constructor(itemservice:ItemService){
    this.items=itemservice.getitems();
  }
  

}
//item service
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    getitems(){
      return [
        {name:'milk',description:'one litre'},
        {name:'coffee',description:'500 grams'},
      ];
  }
}