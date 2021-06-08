import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList= [
    {
      itemName : 'learn the SCSS',
      itemDueDate : '21-june-2021',
      itemPriority: 'high',
      itemCategory: 'Learning new thing'
    },
    {
      itemName : 'Shopping',
      itemDueDate : '22-june-2021',
      itemPriority: 'low',
      itemCategory: 'personal'
    },
    {
      itemName : 'Complate the Module',
      itemDueDate : '10-june-2021',
      itemPriority: 'high',
      itemCategory: 'officework'
    },
    {
      itemName : 'Learn the Ionic',
      itemDueDate : '29-june-2021',
      itemPriority: 'middle',
      itemCategory: 'Learning new thing'
    }
  ];

  today : number = Date.now();
  constructor() {}

}
