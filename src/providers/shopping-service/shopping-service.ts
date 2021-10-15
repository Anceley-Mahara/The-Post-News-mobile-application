//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';

/*
  Generated class for the ShoppingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShoppingServiceProvider {

  constructor(private db:AngularFireDatabase) {
    console.log('Hello ShoppingServiceProvider Provider');
  }

  getShoppingList() {
    this.db.list('propertylisting')//.valueChanges();
  }

}
